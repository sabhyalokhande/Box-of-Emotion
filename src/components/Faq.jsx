import { FAQS } from "../data/faqs.js";

export default function Faq() {
  return (
    <div className="faq-list">
      {FAQS.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
