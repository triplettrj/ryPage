import React from 'react';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F7F7F5;
    --card: #FFFFFF;
    --text: #1A1A1A;
    --muted: #6B7280;
    --border: #E5E7EB;
    --radius: 16px;
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.14);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #111111;
      --card: #1E1E1E;
      --text: #F0F0F0;
      --muted: #9CA3AF;
      --border: #2E2E2E;
      --shadow: 0 2px 12px rgba(0,0,0,0.4);
      --shadow-hover: 0 8px 32px rgba(0,0,0,0.6);
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    padding: 0 0 60px;
  }

  .ry-header {
    text-align: center;
    padding: 64px 24px 40px;
  }
  .ry-header h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
  }
  .ry-header p {
    margin-top: 10px;
    font-size: 1.05rem;
    color: var(--muted);
  }

  .ry-section-label {
    max-width: 960px;
    margin: 40px auto 16px;
    padding: 0 24px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .ry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .ry-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .ry-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
  .ry-card:active { transform: translateY(0); }

  .ry-card-accent { height: 6px; width: 100%; }

  .ry-card-body {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .ry-card-emoji { font-size: 2rem; line-height: 1; margin-bottom: 4px; }

  .ry-card-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1.3;
  }

  .ry-card-desc {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.5;
  }

  .ry-card-tag {
    display: inline-block;
    margin-top: 8px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 6px;
    align-self: flex-start;
  }

  .ry-footer {
    text-align: center;
    margin-top: 60px;
    font-size: 0.8rem;
    color: var(--muted);
  }
`;

// Relative so links work at triplettrj.github.io/ryPage/ AND at a custom domain root
const BASE = '.';

const DEMO = {
  href: `${BASE}/demo/`,
  emoji: '🌸',
  name: 'Jasmine Thai Spa — Demo Site',
  desc: "A full wellness website built in minutes with Claude AI. Same style as a real client's site — hero, services, testimonials, booking. Built to show how fast this works.",
  accent: 'linear-gradient(90deg, #7B5EA7, #4AACBD, #8A9E8A)',
  tag: { bg: '#F3EEF9', color: '#4A2D7A', label: 'Built with Claude AI ✨' },
};

const APPS = [
  {
    href: `${BASE}/kitchen/`,
    emoji: '🍳',
    name: 'My Kitchen',
    desc: 'Inventory tracking, barcode scanning, AI meal planning, and cloud sync.',
    accent: 'linear-gradient(90deg, #34C759, #30D158)',
    tag: { bg: '#E8F9ED', color: '#1A7A38', label: 'iOS + Web App' },
  },
  {
    href: `${BASE}/kitchenfandb/`,
    emoji: '☕',
    name: 'Cafe F&B',
    desc: 'Food & beverage management app for cafe operations.',
    accent: 'linear-gradient(90deg, #5d4037, #8d6e63)',
    tag: { bg: '#EFEBE9', color: '#4E342E', label: 'Web App' },
  },
];

const SITES = [
  {
    href: `${BASE}/hungry-boy-thai-cafe/`,
    emoji: '🍜',
    name: 'Hungry Boy Thai Cafe',
    desc: 'Casual Thai dining in Orange County. Online ordering and dine-in.',
    accent: 'linear-gradient(90deg, #E07B30, #C0392B)',
    tag: { bg: '#FEF3E8', color: '#9A4A10', label: 'Restaurant' },
  },
  {
    href: `${BASE}/luckys-thai-pantry/`,
    emoji: '🥘',
    name: "Lucky's Thai Pantry",
    desc: 'Authentic Thai cuisine, fresh ingredients, dine-in, takeout & catering.',
    accent: 'linear-gradient(90deg, #C9973A, #2A7F7F)',
    tag: { bg: '#FDF6E8', color: '#7A5A10', label: 'Restaurant' },
  },
  {
    href: `${BASE}/thai-garden-market/`,
    emoji: '🛒',
    name: 'Thai Garden Market',
    desc: 'Authentic Thai groceries, imported spices, and fresh produce. Family-owned since 1998.',
    accent: 'linear-gradient(90deg, #2D7A4F, #4CAF78)',
    tag: { bg: '#E8F5EE', color: '#1E5435', label: 'Grocery' },
  },
  {
    href: `${BASE}/jasmine-thai-spa/`,
    emoji: '🌸',
    name: 'Jasmine Thai Spa',
    desc: 'Traditional Thai massage and wellness treatments in Orange County.',
    accent: 'linear-gradient(90deg, #7B5EA7, #3D8B8B)',
    tag: { bg: '#F3EEF9', color: '#4A2D7A', label: 'Spa & Wellness' },
  },
  {
    href: `${BASE}/sara-thai-spa/`,
    emoji: '🧖',
    name: 'Sara Thai Spa',
    desc: 'Luxury Thai wellness and spa treatments in Irvine, Orange County.',
    accent: 'linear-gradient(90deg, #1A5F6A, #4AACBD)',
    tag: { bg: '#E6F4F6', color: '#0D3D45', label: 'Spa & Wellness' },
  },
  {
    href: `${BASE}/chais-auto-care/`,
    emoji: '🚗',
    name: "Chai's Auto Care",
    desc: 'Trusted Thai-owned auto repair in Orange County. Honest service, certified mechanics.',
    accent: 'linear-gradient(90deg, #1A3A5C, #3A7AB8)',
    tag: { bg: '#E8EEF5', color: '#1A3A5C', label: 'Auto Repair' },
  },
];

function Card({ item }) {
  return (
    <a className="ry-card" href={item.href}>
      <div className="ry-card-accent" style={{ background: item.accent }} />
      <div className="ry-card-body">
        <div className="ry-card-emoji">{item.emoji}</div>
        <div className="ry-card-name">{item.name}</div>
        <div className="ry-card-desc">{item.desc}</div>
        <span className="ry-card-tag" style={{ background: item.tag.bg, color: item.tag.color }}>
          {item.tag.label}
        </span>
      </div>
    </a>
  );
}

const LandingPage = () => (
  <>
    <style>{styles}</style>

    <header className="ry-header">
      <h1>Ryan Triplett</h1>
      <p>Apps &amp; websites — Orange County, CA</p>
    </header>

    <div className="ry-section-label">✨ Live Demo</div>
    <div className="ry-grid" style={{ gridTemplateColumns: '1fr' }}>
      <a className="ry-card" href={DEMO.href}>
        <div className="ry-card-accent" style={{ background: DEMO.accent }} />
        <div className="ry-card-body" style={{ flexDirection: 'row', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div className="ry-card-emoji">{DEMO.emoji}</div>
            <div className="ry-card-name" style={{ marginTop: 6 }}>{DEMO.name}</div>
            <div className="ry-card-desc" style={{ marginTop: 4 }}>{DEMO.desc}</div>
          </div>
          <span className="ry-card-tag" style={{ background: DEMO.tag.bg, color: DEMO.tag.color, fontSize: '0.8rem', padding: '6px 14px' }}>
            {DEMO.tag.label}
          </span>
        </div>
      </a>
    </div>

    <div className="ry-section-label">Apps</div>
    <div className="ry-grid">
      {APPS.map(item => <Card key={item.href} item={item} />)}
    </div>

    <div className="ry-section-label">Business Sites</div>
    <div className="ry-grid">
      {SITES.map(item => <Card key={item.href} item={item} />)}
    </div>

    <footer className="ry-footer">
      <p>© 2026 Ryan Triplett · Orange County, CA</p>
    </footer>
  </>
);

export default LandingPage;
