import { useState } from "react";
import { BOE_CONFIG } from "../config.js";

const initialState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  giftingType: "",
  quantity: "",
  message: ""
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "New corporate gifting enquiry — Box of Emotion",
      `Name: ${form.name || "-"}`,
      `Company: ${form.company || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Gifting type: ${form.giftingType || "-"}`,
      `Approx. quantity: ${form.quantity || "-"}`,
      `Requirement: ${form.message || "-"}`
    ];
    const text = encodeURIComponent(lines.join("\n"));
    setSent(true);
    window.open(`https://wa.me/${BOE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
    setForm(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" required placeholder="Your name" value={form.name} onChange={update("name")} />
          </div>
          <div className="field">
            <label htmlFor="company">Company name</label>
            <input id="company" placeholder="Company / organisation" value={form.company} onChange={update("company")} />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" type="tel" required placeholder="+91" value={form.phone} onChange={update("phone")} />
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={update("email")} />
          </div>
          <div className="field">
            <label htmlFor="giftingType">Type of gifting</label>
            <select id="giftingType" value={form.giftingType} onChange={update("giftingType")}>
              <option value="">Select an option</option>
              <option>Employee Onboarding</option>
              <option>Festive Hamper</option>
              <option>Client Gifting</option>
              <option>Work Anniversary / Long Service</option>
              <option>Corporate Event</option>
              <option>Personal / B2C Order</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="quantity">Approx. quantity</label>
            <input id="quantity" placeholder="e.g. 200 units" value={form.quantity} onChange={update("quantity")} />
          </div>
          <div className="field full">
            <label htmlFor="message">Tell us about your requirement</label>
            <textarea
              id="message"
              placeholder="Occasion, categories of interest, timeline, branding needs..."
              value={form.message}
              onChange={update("message")}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-block mt-24">Send Enquiry via WhatsApp</button>
        <p className="form-note">
          This opens WhatsApp with your details pre-filled so our team can respond quickly. Prefer email? Write to{" "}
          <a href={`mailto:${BOE_CONFIG.email}`} style={{ fontWeight: 700 }}>{BOE_CONFIG.email}</a>.
        </p>
        <div className={`form-success${sent ? " show" : ""}`}>
          Thanks! WhatsApp is opening with your enquiry — send the message and our team will reply shortly.
        </div>
      </form>
    </div>
  );
}
