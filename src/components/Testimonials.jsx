import { TESTIMONIALS } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <div className="testimonial-grid">
      {TESTIMONIALS.map((t) => (
        <div className="testimonial-card" key={t.name + t.company}>
          <div className="stars" aria-hidden="true">★★★★★</div>
          <p className="quote">&ldquo;{t.quote}&rdquo;</p>
          <div className="attribution">
            <strong>{t.name}</strong>
            <span>{t.company}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
