import "./css/CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="CTA-container">
        <div className="cta-grid">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Become a Member?</h2>
            <p className="cta-subtitle">
              Join <span className="highlight">2,000+</span> members who have already joined.
            </p>
          </div>
          <div className="cta-buttons">
            <a className="btn btn-primary" href="/download">
              Download Forms
            </a>
            <a className="btn btn-secondary" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
