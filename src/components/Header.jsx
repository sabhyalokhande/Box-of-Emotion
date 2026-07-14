import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BOE_CONFIG } from "../config.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const close = () => setOpen(false);
  const anchor = (hash) => (onHome ? `#${hash}` : `/#${hash}`);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={close}>
          <img className="brand-mark" src="/images/brand/tbe-logo-mark.png" alt="The Box of Emotions" />
          <span>
            Box of Emotion
            <small>Corporate Gifting</small>
          </span>
        </Link>

        <nav className={`nav-links${open ? " open" : ""}`}>
          <a href={anchor("categories")} onClick={close}>Categories</a>
          <a href={anchor("about")} onClick={close}>About</a>
          <a href={anchor("how-it-works")} onClick={close}>How It Works</a>
          <a href={anchor("brands")} onClick={close}>Brands</a>
          <Link to="/catalogue" onClick={close}>Catalogue</Link>
        </nav>

        <div className="nav-cta">
          <a className="phone" href={`tel:${BOE_CONFIG.phone.replace(/\s+/g, "")}`}>
            {BOE_CONFIG.phone}
          </a>
          <a href={anchor("enquiry")} className="link-arrow">Enquire &rarr;</a>
        </div>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span></span>
        </button>
      </div>
    </header>
  );
}
