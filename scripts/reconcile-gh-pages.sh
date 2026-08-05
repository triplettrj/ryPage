#!/usr/bin/env bash
#
# Pull anything that exists only on the live gh-pages branch back into
# public/, so master becomes the source of truth again.
#
# The guard (predeploy-guard.sh) blocks a destructive deploy but cannot
# repair the underlying drift. This does the repair. Run it whenever the
# guard fires, or periodically to check.
#
#   ./scripts/reconcile-gh-pages.sh          # report drift only
#   ./scripts/reconcile-gh-pages.sh --apply  # copy live-only files into public/
#
# Build output is always ignored: static/, asset-manifest.json, and the root
# index.html (public/index.html is the CRA template, the deployed one is the
# rendered result -- they never match and are not supposed to).

set -euo pipefail

IGNORE='^(static/|asset-manifest\.json$|index\.html$)'

cd "$(dirname "$0")/.."

REMOTE="${DEPLOY_REMOTE:-origin}"
BRANCH="${DEPLOY_BRANCH:-gh-pages}"
APPLY=0
[ "${1:-}" = "--apply" ] && APPLY=1

if ! git -c http.version=HTTP/1.1 fetch -q "$REMOTE" "$BRANCH"; then
  echo "reconcile: could not fetch $REMOTE/$BRANCH." >&2
  exit 1
fi

live="$(mktemp)"; src="$(mktemp)"; only="$(mktemp)"; newer="$(mktemp)"
trap 'rm -f "$live" "$src" "$only" "$newer"' EXIT

git ls-tree -r --name-only FETCH_HEAD \
  | grep -Ev "$IGNORE" | sort > "$live"

(cd public && find . -type f | sed 's|^\./||') \
  | grep -Ev "$IGNORE" | sort > "$src"

# Live-only: on gh-pages, missing from public/ entirely.
comm -23 "$live" "$src" > "$only"

# Present in both but differing. Reported, never auto-copied: which side is
# correct depends on intent, and public/ is legitimately ahead after edits.
: > "$newer"
while read -r f; do
  [ -f "public/$f" ] || continue
  if ! git show "FETCH_HEAD:$f" 2>/dev/null | cmp -s - "public/$f"; then
    echo "$f" >> "$newer"
  fi
done < <(comm -12 "$live" "$src")

n_only=$(wc -l < "$only" | tr -d ' ')
n_diff=$(wc -l < "$newer" | tr -d ' ')

if [ "$n_only" -eq 0 ] && [ "$n_diff" -eq 0 ]; then
  echo "reconcile: no drift -- public/ matches $BRANCH."
  exit 0
fi

if [ "$n_only" -gt 0 ]; then
  echo
  echo "  Live only -- on $BRANCH but absent from public/ ($n_only file(s)):"
  sed 's|/.*||' "$only" | sort -u | while read -r top; do
    printf '    %-28s %s file(s)\n' "$top" "$(grep -c "^${top}\(/\|$\)" "$only" || true)"
  done
  echo "    These are one deploy away from being deleted permanently."
fi

if [ "$n_diff" -gt 0 ]; then
  echo
  echo "  Differing -- in both, but not identical ($n_diff file(s)):"
  sed 's|^|    |' "$newer"
  echo "    Not auto-copied: public/ may legitimately be ahead. Diff with"
  echo "    git diff FETCH_HEAD:<path> public/<path>"
fi
echo

if [ "$APPLY" -ne 1 ]; then
  echo "  Re-run with --apply to copy the live-only files into public/."
  exit 1
fi

if [ "$n_only" -eq 0 ]; then
  echo "  Nothing to copy (differing files are never auto-copied)."
  exit 0
fi

while read -r f; do
  mkdir -p "public/$(dirname "$f")"
  git show "FETCH_HEAD:$f" > "public/$f"
done < "$only"

echo "  Copied $n_only file(s) into public/. Review and commit:"
echo "    git status public/"
