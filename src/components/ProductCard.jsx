import { Link } from "react-router-dom";
import { BOE_CONFIG } from "../config.js";

export default function ProductCard({ product, categoryName }) {
  const message = encodeURIComponent(
    `Hi Box of Emotion, I'd like a quote for:\n${product.name} (Code ${product.sku})${
      categoryName ? `\nCategory: ${categoryName}` : ""
    }`
  );
  const waHref = `https://wa.me/${BOE_CONFIG.whatsappNumber}?text=${message}`;

  return (
    <div className="product-tile">
      <Link to={`/catalogue/product/${product.sno}`} className="product-tile-link">
        <div className="product-tile-media">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="13" rx="1" />
            <path d="M3 12h18" />
            <path d="M12 8v13" />
            <path d="M12 8c-1.5 0-3.5-.5-3.5-2.25S10 3.5 11 4.5c.7.7 1 2.5 1 3.5z" />
            <path d="M12 8c1.5 0 3.5-.5 3.5-2.25S13 3.5 12 4.5c-.7.7-1 2.5-1 3.5z" />
          </svg>
        </div>
        <div className="product-tile-body">
          {categoryName && <span className="product-tile-cat">{categoryName}</span>}
          <h4>{product.name}</h4>
          <div className="product-tile-meta">
            Code {product.sku}
            {product.variants && <span className="product-tile-variant"> &middot; {product.variants}</span>}
          </div>
        </div>
      </Link>
      <a className="product-tile-cta" href={waHref} target="_blank" rel="noopener">
        Request Quote
      </a>
    </div>
  );
}
