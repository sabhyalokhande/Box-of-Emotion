import { Link, useParams } from "react-router-dom";
import { FULL_CATALOGUE } from "../data/fullCatalogue.js";
import { BOE_CONFIG } from "../config.js";
import ProductImage from "../components/ProductImage.jsx";

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
  const code = product.be || product.sku;
  const message = encodeURIComponent(
    `Hi The Box of Emotions, I'd like a quote for:\n${product.name} (Code ${code})\nCategory: ${category.name}`
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
            <ProductImage sno={product.sno} name={product.name} strokeWidth="1" />
          </div>

          <div className="product-detail-body">
            <span className="product-tile-cat">{category.name}</span>
            <h1>{product.name}</h1>
            <div className="def-list product-detail-facts">
              <div className="def-row">
                <div className="term">Product code</div>
                <div className="desc">{code}</div>
              </div>
              {product.be && (
                <div className="def-row">
                  <div className="term">Old ref code</div>
                  <div className="desc">{product.sku}</div>
                </div>
              )}
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
