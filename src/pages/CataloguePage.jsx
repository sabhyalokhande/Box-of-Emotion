import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { FULL_CATALOGUE, FULL_CATALOGUE_TOTAL, FULL_CATALOGUE_CATEGORY_COUNT } from "../data/fullCatalogue.js";
import ProductCard from "../components/ProductCard.jsx";

export default function CataloguePage() {
  const [category, setCategory] = useState(FULL_CATALOGUE[0].slug);
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && FULL_CATALOGUE.some((c) => c.slug === hash)) {
      setCategory(hash);
    }
  }, [location.hash]);

  const q = query.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!q) return null;
    const results = [];
    for (const cat of FULL_CATALOGUE) {
      for (const p of cat.products) {
        if (p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)) {
          results.push({ ...p, categoryName: cat.name, categorySlug: cat.slug });
        }
      }
    }
    return results;
  }, [q]);

  const activeCategory = useMemo(
    () => FULL_CATALOGUE.find((cat) => cat.slug === category) || FULL_CATALOGUE[0],
    [category]
  );

  return (
    <>
      <section className="cat-hero">
        <div className="wrap">
          <h1>{FULL_CATALOGUE_TOTAL}+ corporate gifts, organised by category</h1>
          <p>
            Our full sourcing catalogue across {FULL_CATALOGUE_CATEGORY_COUNT} product categories. No prices
            are listed online — every single design is quoted against quantity and customisation. Tap
            &ldquo;Request Quote&rdquo; on any product to get a proposal on WhatsApp.
          </p>
        </div>
      </section>

      <div className="cat-controls-bar">
        <div className="wrap cat-controls">
          <div className="field-inline">
            <label htmlFor="cat-search">Search products</label>
            <input
              id="cat-search"
              type="text"
              placeholder="Search by name or code..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="field-inline">
            <label htmlFor="cat-select">Category</label>
            <select
              id="cat-select"
              value={category}
              onChange={(e) => {
                setQuery("");
                setCategory(e.target.value);
              }}
            >
              {FULL_CATALOGUE.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name} ({cat.products.length})
                </option>
              ))}
            </select>
          </div>
          <span className="cat-results-count">
            {q
              ? `${searchResults.length} result${searchResults.length === 1 ? "" : "s"}`
              : `${activeCategory.products.length} products`}
          </span>
        </div>
      </div>

      {q ? (
        <section className="cat-block">
          <div className="wrap">
            {searchResults.length === 0 ? (
              <p className="spec-empty">No products match &ldquo;{query}&rdquo;. Try a different search term.</p>
            ) : (
              <div className="product-tile-grid">
                {searchResults.map((p) => (
                  <ProductCard product={p} categoryName={p.categoryName} key={`${p.categorySlug}-${p.sno}`} />
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="cat-block" id={activeCategory.slug}>
          <div className="wrap">
            <div className="cat-block-head">
              <h2>
                {activeCategory.name}
                <span className="count-pill">{activeCategory.products.length} products</span>
              </h2>
            </div>
            <div className="product-tile-grid">
              {activeCategory.products.map((p) => (
                <ProductCard product={p} key={p.sno} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cat-cta">
        <div className="wrap">
          <h2>Don&apos;t see exactly what you need?</h2>
          <p style={{ maxWidth: 520 }}>
            This is our full {FULL_CATALOGUE_TOTAL}-product sourcing range. Every item is quoted, not
            priced online — tell us your occasion, headcount and budget and we&apos;ll curate a custom set
            or point you to the right category.
          </p>
          <a href="/#enquiry" className="link-arrow">Request a custom quote &rarr;</a>
        </div>
      </section>
    </>
  );
}
