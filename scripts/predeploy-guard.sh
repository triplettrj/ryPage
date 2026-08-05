#!/usr/bin/env bash
#
# Refuse to deploy if publishing build/ would delete anything that is
# currently live on gh-pages.
#
# `gh-pages -d build` replaces the branch wholesale. Any file live on
# gh-pages but absent from build/ is silently destroyed. That is how 14
# sites were nearly lost in Aug 2026 -- they existed only on the deployed
# branch and had no copy in public/.
#
# Build artifacts under static/ are exempt: their filenames carry content
# hashes, so old ones are expected to disappear on every build.
#
# Override with ALLOW_GHPAGES_DELETE=1 when a deletion is genuinely intended.

set -euo pipefail

BUILD_DIR="${BUILD_DIR:-build}"
REMOTE="${DEPLOY_REMOTE:-origin}"
BRANCH="${DEPLOY_BRANCH:-gh-pages}"

if [ ! -d "$BUILD_DIR" ]; then
  echo "predeploy-guard: '$BUILD_DIR' does not exist -- run the build first." >&2
  exit 1
fi

if ! git -c http.version=HTTP/1.1 fetch -q "$REMOTE" "$BRANCH" 2>/dev/null; then
  echo "predeploy-guard: could not fetch $REMOTE/$BRANCH." >&2
  echo "  Deploy blocked: cannot verify what is live, so cannot confirm" >&2
  echo "  the deploy is non-destructive. Reconnect and retry." >&2
  exit 1
fi

live="$(mktemp)"; staged="$(mktemp)"; lost="$(mktemp)"
trap 'rm -f "$live" "$staged" "$lost"' EXIT

# Files currently live, minus hashed build output.
git ls-tree -r --name-only FETCH_HEAD \
  | grep -Ev '^(static/|asset-manifest\.json$)' \
  | sort > "$live"

# Files this deploy would publish.
(cd "$BUILD_DIR" && find . -type f) \
  | sed 's|^\./||' \
  | grep -Ev '^(static/|asset-manifest\.json$)' \
  | sort > "$staged"

comm -23 "$live" "$staged" > "$lost"

if [ -s "$lost" ]; then
  count=$(wc -l < "$lost" | tr -d ' ')
  echo >&2
  echo "  DEPLOY BLOCKED -- would delete $count live file(s)" >&2
  echo >&2
  echo "  These exist on $REMOTE/$BRANCH but not in $BUILD_DIR/, so" >&2
  echo "  deploying would permanently remove them from the live site:" >&2
  echo >&2
  # Group by top-level directory so whole missing sites read clearly.
  sed 's|/.*||' "$lost" | sort -u | while read -r top; do
    n=$(grep -c "^${top}\(/\|$\)" "$lost" || true)
    printf '    %-28s %s file(s)\n' "$top" "$n" >&2
  done
  echo >&2
  echo "  Most likely these were edited directly on the $BRANCH branch" >&2
  echo "  and never copied back into public/. Recover them first:" >&2
  echo >&2
  echo "    git fetch $REMOTE $BRANCH" >&2
  echo "    git checkout FETCH_HEAD -- <path>   # into public/" >&2
  echo >&2
  echo "  If the deletion is intended: ALLOW_GHPAGES_DELETE=1 npm run deploy" >&2
  echo >&2
  [ "${ALLOW_GHPAGES_DELETE:-}" = "1" ] || exit 1
  echo "  ALLOW_GHPAGES_DELETE=1 set -- proceeding with the deletion." >&2
  echo >&2
  exit 0
fi

echo "predeploy-guard: OK -- deploy deletes no live content."
