import { Link } from "react-router-dom";
import { BOE_CONFIG } from "../config.js";
import ProductImage from "./ProductImage.jsx";

export default function ProductCard({ product, categoryName }) {
  const code = product.be || product.sku;
  const message = encodeURIComponent(
    `Hi Box of Emotion, I'd like a quote for:\n${product.name} (Code ${code})${
      categoryName ? `\nCategory: ${categoryName}` : ""
    }`
  );
  const waHref = `https://wa.me/${BOE_CONFIG.whatsappNumber}?text=${message}`;

  return (
    <div className="product-tile">
      <Link to={`/catalogue/product/${product.sno}`} className="product-tile-link">
        <div className="product-tile-media">
          <ProductImage sno={product.sno} name={product.name} strokeWidth="1.3" />
        </div>
        <div className="product-tile-body">
          {categoryName && <span className="product-tile-cat">{categoryName}</span>}
          <h4>{product.name}</h4>
          <div className="product-tile-meta">
            Code {code}
            {product.be && <span className="product-tile-ref"> &middot; Ref {product.sku}</span>}
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
