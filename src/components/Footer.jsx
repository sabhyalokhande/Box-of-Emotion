import { Link } from "react-router-dom";
import { BOE_CONFIG } from "../config.js";

export default function Footer({ minimal = false }) {
  const year = new Date().getFullYear();

  if (minimal) {
    return (
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
            <span>&copy; {year} Box of Emotion. All rights reserved.</span>
            <span>
              <Link to="/" style={{ color: "var(--accent-400)", fontWeight: 700 }}>
                Back to homepage
              </Link>
            </span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <span className="brand">
              <img className="brand-mark" src="/images/brand/tbe-logo-mark.png" alt="The Box of Emotions" />
              Box of Emotion
            </span>
            <p>Corporate &amp; client gifting, designed and delivered at scale — for B2B teams and B2C gifting alike.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#categories">Categories</a></li>
              <li><Link to="/catalogue">Full Catalogue</Link></li>
              <li><a href="#brands">Brands We Work With</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#reviews">Client Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#enquiry">Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${BOE_CONFIG.phone.replace(/\s+/g, "")}`}>{BOE_CONFIG.phone}</a></li>
              <li><a href={`mailto:${BOE_CONFIG.email}`}>{BOE_CONFIG.email}</a></li>
              <li><span>{BOE_CONFIG.city}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} Box of Emotion. All rights reserved.</span>
          <span>Corporate Gifting &middot; B2B &amp; B2C &middot; MOQ 100+</span>
        </div>
      </div>
    </footer>
  );
}
