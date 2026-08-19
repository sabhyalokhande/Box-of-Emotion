import { Link } from "react-router-dom";
import CategoryRows from "../components/CategoryRows.jsx";
import BrandLine from "../components/BrandLine.jsx";
import QrCatalogue from "../components/QrCatalogue.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Faq from "../components/Faq.jsx";
import { BOE_CONFIG } from "../config.js";
import { FULL_CATALOGUE_TOTAL, FULL_CATALOGUE_CATEGORY_COUNT } from "../data/fullCatalogue.js";

export default function HomePage() {
  return (
    <>
      <section className="hero-split">
        <div className="wrap hero-split-grid">
          <div className="hero-split-copy">
            <span className="kicker">Thoughtful gifts. Stronger relationships.</span>
            <h1>Corporate gifting that carries <span className="accent">your brand&apos;s emotion.</span></h1>
            <p className="lede">
              We design, brand and ship gift hampers, onboarding kits and festive boxes for businesses
              across India — 100 units minimum, priced per order.
            </p>
            <div className="hero-cta-row">
              <Link to="/catalogue" className="btn-pill btn-pill-solid">Explore Catalogue <span>&rarr;</span></Link>
              <a href="#enquiry" className="btn-pill btn-pill-outline">Get a Bulk Quote</a>
            </div>
            <div className="hero-trust-row">
              <div className="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="13" rx="1" />
                  <path d="M3 12h18" />
                  <path d="M12 8v13" />
                  <path d="M12 8c-1.5 0-3.5-.5-3.5-2.25S10 3.5 11 4.5c.7.7 1 2.5 1 3.5z" />
                  <path d="M12 8c1.5 0 3.5-.5 3.5-2.25S13 3.5 12 4.5c-.7.7-1 2.5-1 3.5z" />
                </svg>
                <span>{FULL_CATALOGUE_TOTAL}+ Product Catalogue</span>
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.82z" />
                  <circle cx="7.5" cy="7.5" r="1.5" />
                </svg>
                <span>Custom Branding &amp; Packaging</span>
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="6" width="13" height="10" />
                  <path d="M14 10h4l3 3v3h-7z" />
                  <circle cx="6" cy="18.5" r="1.7" />
                  <circle cx="17.5" cy="18.5" r="1.7" />
                </svg>
                <span>Pan-India Delivery</span>
              </div>
            </div>
          </div>
          <div className="hero-split-media">
            <img
              src="/images/hero/hero-gift-box.jpg"
              alt="Branded gift box with gold ribbon, insulated bottle and desk essentials, styled for corporate gifting"
            />
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="wrap stats-banner-grid">
          <div className="stat-block">
            <div className="stat-num">{FULL_CATALOGUE_TOTAL}+</div>
            <div className="stat-label">Products in Catalogue</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">{FULL_CATALOGUE_CATEGORY_COUNT}</div>
            <div className="stat-label">Product Categories</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">100+</div>
            <div className="stat-label">Minimum Order Qty</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">Pan-India</div>
            <div className="stat-label">Delivery Network</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="lede-block">
            <p>
              From a new hire&apos;s first day to a client&apos;s Diwali, from a bank&apos;s anniversary
              hamper to a jeweller&apos;s festive gift box — we design, brand and fulfil gifting programs
              for businesses of every size, alongside gifting for individual orders.
            </p>
            <p>
              Every order is quoted against quantity and customisation. Nothing here is one-size-fits-all
              — and nothing is sold as a single unit.
            </p>
          </div>
          <div className="def-list">
            <div className="def-row">
              <div className="term">B2B &amp; B2C</div>
              <div className="desc">Corporate bulk programs and individual gifting orders, both served from the same catalogue.</div>
            </div>
            <div className="def-row">
              <div className="term">MOQ 100 units</div>
              <div className="desc">Our production and customisation model is built around orders of 100 units and above.</div>
            </div>
            <div className="def-row">
              <div className="term">Volume pricing</div>
              <div className="desc">Pricing is discussed per order — it scales with quantity, customisation and branding needs. Share your requirement for a quote.</div>
            </div>
            <div className="def-row">
              <div className="term">{FULL_CATALOGUE_TOTAL}+ products</div>
              <div className="desc">{FULL_CATALOGUE_CATEGORY_COUNT} categories spanning everyday essentials to festive gift sets — browse the range or ask us to build a custom set.</div>
            </div>
          </div>
          <a href="#enquiry" className="link-arrow mt-24">Discuss your requirement &rarr;</a>
        </div>
      </section>

      <section className="section section--alt" id="categories">
        <div className="wrap">
          <div className="section-head">
            <h2>Category-wise gifting, ready to customise</h2>
            <p>A snapshot of what&apos;s inside our {FULL_CATALOGUE_TOTAL}-product catalogue. Every category can be branded with your logo, colours and messaging.</p>
          </div>
          <CategoryRows />
          <Link to="/catalogue" className="link-arrow mt-24">View the full catalogue &rarr;</Link>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="wrap">
          <div className="section-head">
            <h2>Just share your requirement — we handle the rest</h2>
          </div>
          <div className="steps-list">
            <div className="step-row"><div className="num">01</div><div><h4>Share your requirement</h4><p>Tell us the occasion, headcount and budget range through the enquiry form or WhatsApp.</p></div></div>
            <div className="step-row"><div className="num">02</div><div><h4>Curate &amp; sample</h4><p>We shortlist products from the catalogue or build a custom hamper, with samples on request.</p></div></div>
            <div className="step-row"><div className="num">03</div><div><h4>Brand &amp; confirm</h4><p>Your logo, colours and packaging are finalised and confirmed before bulk production begins.</p></div></div>
            <div className="step-row"><div className="num">04</div><div><h4>Pack &amp; deliver</h4><p>Every unit is packed and dispatched pan-India — to your office, event or straight to recipients.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="brands">
        <div className="wrap">
          <div className="section-head">
            <h2>Brands we&apos;ve gifted for</h2>
            <p>A few of the corporates and institutions The Box of Emotions has designed and delivered gifting programs for.</p>
          </div>
          <BrandLine />
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <h2>What clients say</h2>
            <p>Feedback from teams we&apos;ve delivered bulk gifting programs for.</p>
          </div>
          <Testimonials />
        </div>
      </section>

      <QrCatalogue />

      <section className="section section--alt" id="faq">
        <div className="wrap">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <Faq />
        </div>
      </section>

      <section className="section section--dark" id="enquiry">
        <div className="wrap">
          <div className="enquiry">
            <div>
              <h2>Let&apos;s plan your gifting</h2>
              <p>
                Share a few details and our gifting team will get back to you with options and next steps —
                no pricing is listed online since every order is quoted against quantity and customisation.
              </p>

              <div className="contact-lines">
                <div className="row">
                  <div className="label">Call / WhatsApp</div>
                  <a href={`tel:${BOE_CONFIG.phone.replace(/\s+/g, "")}`}>{BOE_CONFIG.phone}</a>
                </div>
                <div className="row">
                  <div className="label">Email</div>
                  <a href={`mailto:${BOE_CONFIG.email}`}>{BOE_CONFIG.email}</a>
                </div>
                <div className="row">
                  <div className="label">Based in</div>
                  <span className="value">{BOE_CONFIG.city}</span>
                </div>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
