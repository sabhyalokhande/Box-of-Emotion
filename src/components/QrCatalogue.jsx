import { BOE_CONFIG } from "../config.js";

export default function QrCatalogue() {
  const target = `${BOE_CONFIG.siteUrl.replace(/\/$/, "")}/catalogue`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=${encodeURIComponent(target)}`;

  return (
    <section className="section">
      <div className="wrap">
        <div className="qr-row">
          <div>
            <h2>Carry the catalogue in your pocket</h2>
            <p>
              Scan this code to open our full category-wise catalogue on any phone — perfect for sharing on
              WhatsApp, printing on a flyer, or leaving with a client after a meeting.
            </p>
            <p style={{ fontSize: ".82rem", color: "var(--ink-400)" }}>{target}</p>
          </div>
          <div className="qr-frame">
            <img src={qrSrc} width="152" height="152" alt={`QR code linking to ${target}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
