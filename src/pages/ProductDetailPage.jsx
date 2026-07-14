import { Link, useParams } from "react-router-dom";
import { FULL_CATALOGUE } from "../data/fullCatalogue.js";
import { BOE_CONFIG } from "../config.js";

function findProduct(sno) {
  for (const cat of FULL_CATALOGUE) {
    const product = cat.products.find((p) => p.sno === sno);
    if (product) return { product, category: cat };
  }
  return null;
}

export default function ProductDetailPage() {
  const { sno } = useParams();
  const found = findProduct(Number(sno));

  if (!found) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Product not found</h1>
          <p>This product may have been renamed or removed.</p>
          <Link to="/catalogue" className="link-arrow">Back to catalogue &rarr;</Link>
        </div>
      </section>
    );
  }

  const { product, category } = found;
  const message = encodeURIComponent(
    `Hi Box of Emotion, I'd like a quote for:\n${product.name} (Code ${product.sku})\nCategory: ${category.name}`
  );
  const waHref = `https://wa.me/${BOE_CONFIG.whatsappNumber}?text=${message}`;

  return (
    <section className="section product-detail">
      <div className="wrap">
        <Link to={`/catalogue#${category.slug}`} className="link-arrow muted mt-24">
          &larr; Back to {category.name}
        </Link>

        <div className="product-detail-grid">
          <div className="product-detail-media">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="8" width="18" height="13" rx="1" />
              <path d="M3 12h18" />
              <path d="M12 8v13" />
              <path d="M12 8c-1.5 0-3.5-.5-3.5-2.25S10 3.5 11 4.5c.7.7 1 2.5 1 3.5z" />
              <path d="M12 8c1.5 0 3.5-.5 3.5-2.25S13 3.5 12 4.5c-.7.7-1 2.5-1 3.5z" />
            </svg>
          </div>

          <div className="product-detail-body">
            <span className="product-tile-cat">{category.name}</span>
            <h1>{product.name}</h1>
            <div className="def-list product-detail-facts">
              <div className="def-row">
                <div className="term">Product code</div>
                <div className="desc">{product.sku}</div>
              </div>
              {product.variants && (
                <div className="def-row">
                  <div className="term">Variants</div>
                  <div className="desc">{product.variants}</div>
                </div>
              )}
              <div className="def-row">
                <div className="term">Pricing</div>
                <div className="desc">Quoted against quantity and customisation — no fixed price is listed online.</div>
              </div>
              <div className="def-row">
                <div className="term">Minimum order</div>
                <div className="desc">100 units per design.</div>
              </div>
            </div>

            <a className="btn-pill btn-pill-solid" href={waHref} target="_blank" rel="noopener">
              Request Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
