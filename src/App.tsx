import './App.css';
import { Button } from './components';

function App() {
  return (
    <main className="library-showcase">
      {/* <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Atomic Design System</p>
          <h1>UI Library</h1>
          <p className="description">
            A reusable component foundation built with React, TypeScript, and Storybook.
            Tokens, atomic structure, and accessible component patterns are all set up for scale.
          </p>
          <div className="actions">
            <Button variant="primary">Get started</Button>
            <Button variant="secondary">View tokens</Button>
          </div>
        </div>
      </section> */}

      <section className="token-grid" aria-label="Design token overview">
        <div className="token-card">
          <span className="token-label">Brand</span>
          <div className="swatches">
            <span style={{ background: '#2f6df6' }} />
            <span style={{ background: '#1e58d9' }} />
            <span style={{ background: '#bfd7ff' }} />
          </div>
        </div>
        <div className="token-card">
          <span className="token-label">Neutral</span>
          <div className="swatches">
            <span style={{ background: '#0f172a' }} />
            <span style={{ background: '#475569' }} />
            <span style={{ background: '#e2e8f0' }} />
          </div>
        </div>
        <div className="token-card">
          <span className="token-label">Shadow</span>
          <div className="shadow-sample" aria-hidden="true" />
        </div>
      </section>

      <section className="button-showcase" aria-label="Button variants showcase">
        <h2>Button variants</h2>
        <div className="button-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
