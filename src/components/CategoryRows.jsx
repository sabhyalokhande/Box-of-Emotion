import { Link } from "react-router-dom";
import { CATALOGUE, productImage } from "../data/products.js";

export default function CategoryRows() {
  return (
    <div className="cat-rows">
      {CATALOGUE.map((cat, i) => (
        <div className="cat-row" key={cat.slug}>
          <div className="cat-row-media">
            <img src={productImage(cat.slug, cat.products[0].image)} alt={cat.name} loading="lazy" />
          </div>
          <div>
            <div className="cat-row-num">{String(i + 1).padStart(2, "0")}</div>
            <h3>
              {cat.name}
              <span className="count">{cat.products.length} designs</span>
            </h3>
            <p>{cat.tagline}</p>
            <Link className="link-arrow" to={`/catalogue#${cat.slug}`}>View category &rarr;</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
