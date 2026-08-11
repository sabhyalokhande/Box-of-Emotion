import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findSegment } from "../data/giftingSegments.js";
import ProductCard from "../components/ProductCard.jsx";

export default function GiftingSegmentPage() {
  const { segment } = useParams();
  const seg = findSegment(segment);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const groups = useMemo(() => {
    if (!seg) return [];
    if (!q) return seg.productTypes;
    return seg.productTypes
      .map((g) => ({
        type: g.type,
        products: g.products.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            (p.be && p.be.toLowerCase().includes(q)) ||
            (p.sku && String(p.sku).toLowerCase().includes(q))
        ),
      }))
      .filter((g) => g.products.length > 0);
  }, [seg, q]);

  if (!seg) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Segment not found</h1>
          <Link to="/gifting" className="link-arrow">Back to gifting segments &rarr;</Link>
        </div>
      </section>
    );
  }

  const shown = groups.reduce((n, g) => n + g.products.length, 0);

  return (
    <section className="section">
      <div className="wrap">
        <Link to="/gifting" className="link-arrow muted">&larr; All gifting segments</Link>

        <div className="segment-hero">
          <div className="segment-hero-media">
            <img src={seg.thumb} alt={seg.name} loading="lazy"
                 onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
          </div>
          <div className="segment-hero-body">
            <span className="kicker">Gifting Segment</span>
            <h1>{seg.name}</h1>
            <p className="lede">{seg.description}</p>
            <span className="segment-card-count">{seg.count} products</span>
          </div>
        </div>

        <div className="segment-controls">
          <div className="field-inline">
            <label htmlFor="seg-search">Search this segment</label>
            <input
              id="seg-search"
              type="text"
              placeholder="Search by name or code..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="segment-shown-count">{shown} products</div>
        </div>

        {groups.map((g) => (
          <div key={g.type} className="segment-type-block">
            <h2 className="segment-type-head">
              {g.type} <span className="count">{g.products.length}</span>
            </h2>
            <div className="product-tile-grid">
              {g.products.map((p) => (
                <ProductCard key={p.be || p.sno} product={p} categoryName={g.type} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
