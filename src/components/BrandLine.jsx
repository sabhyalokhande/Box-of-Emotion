import { BRANDS } from "../data/products.js";

export default function BrandLine() {
  const track = [...BRANDS, ...BRANDS];
  return (
    <div className="brand-marquee">
      <div className="brand-marquee-track">
        {track.map((b, i) =>
          b.logo ? (
            <div className="brand-marquee-item" key={`${b.name}-${i}`}>
              <img src={`/images/brands/${b.logo}`} alt={b.name} loading="lazy" />
            </div>
          ) : (
            <div className="brand-marquee-item" key={`${b.name}-${i}`}>
              <span className="brand-marquee-text">{b.name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
