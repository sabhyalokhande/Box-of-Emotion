import { useState } from "react";

const PLACEHOLDER = (strokeWidth) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="13" rx="1" />
    <path d="M3 12h18" />
    <path d="M12 8v13" />
    <path d="M12 8c-1.5 0-3.5-.5-3.5-2.25S10 3.5 11 4.5c.7.7 1 2.5 1 3.5z" />
    <path d="M12 8c1.5 0 3.5-.5 3.5-2.25S13 3.5 12 4.5c-.7.7-1 2.5-1 3.5z" />
  </svg>
);

// Renders the product photo derived from its sno, falling back to the gift-box
// placeholder when no image exists for that product (or it fails to load).
export default function ProductImage({ sno, name, strokeWidth = 1.3 }) {
  const [failed, setFailed] = useState(false);
  if (failed) return PLACEHOLDER(strokeWidth);
  return (
    <img
      className="product-photo"
      src={`/images/catalogue/${sno}.jpg`}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
