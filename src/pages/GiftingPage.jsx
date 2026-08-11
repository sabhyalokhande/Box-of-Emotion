import { Link } from "react-router-dom";
import { GIFTING_SEGMENTS } from "../data/giftingSegments.js";

export default function GiftingPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Gifting Segments</span>
          <h1>Curated gifting, organised by occasion</h1>
          <p className="lede">
            Every product is grouped into six gifting segments &mdash; on top of our{" "}
            <Link to="/catalogue" className="link-inline">product-type catalogue</Link>. Pick a
            segment to see hampers and items suited to it. Prices are quoted per order.
          </p>
        </div>

        <div className="segment-grid">
          {GIFTING_SEGMENTS.map((seg) => (
            <Link key={seg.slug} to={`/gifting/${seg.slug}`} className="segment-card">
              <div className="segment-card-media">
                <img src={seg.thumb} alt={seg.name} loading="lazy"
                     onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
              </div>
              <div className="segment-card-body">
                <span className="segment-card-count">{seg.count} products</span>
                <h3>{seg.name}</h3>
                <p>{seg.description}</p>
                <span className="link-arrow">Explore segment &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
