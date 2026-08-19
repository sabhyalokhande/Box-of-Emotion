/**
 * The Box of Emotions — curated hamper showcase (photographed examples)
 * -----------------------------------------------------------------
 * This is the small set of real, photographed gift hampers shown on
 * the homepage (CategoryRows) — finished, assembled examples we've
 * delivered for real clients. It is NOT the full product catalogue;
 * for that (826 individual sourcing SKUs across 64 categories, no
 * photos), see fullCatalogue.js, which powers the /catalogue page.
 *
 *   TO ADD A PRODUCT    -> add an object to the relevant category's
 *                          `products` array.
 *   TO REMOVE A PRODUCT -> delete its object from the array.
 *   TO ADD A CATEGORY   -> add a new entry to the CATALOGUE array
 *                          below, then create a matching folder at
 *                          public/images/products/<slug>/ for photos.
 *
 * `image` values are filenames inside public/images/products/<category slug>/
 */

export const CATALOGUE = [
  {
    slug: "onboarding-kits",
    name: "Onboarding & Welcome Kits",
    tagline: "First-day kits that make new hires feel at home from day one.",
    products: [
      {
        name: "Classic Backpack Welcome Set",
        desc: "Branded backpack, insulated steel bottle, hardbound notebook, pen, cardholder & keychain.",
        image: "01.jpg"
      },
      {
        name: "Two-Tone Executive Backpack Kit",
        desc: "Navy & black backpack with insulated bottle, diary, pen and keychain.",
        image: "02.jpg"
      },
      {
        name: "Premium Leather Onboarding Set",
        desc: "Leather laptop bag, steel tumbler, cardholder, keychain, leather-bound diary & pen.",
        image: "03.jpg"
      },
      {
        name: "New Hire Essentials Box",
        desc: "Curated desk essentials, packed and ready for pan-India dispatch in bulk.",
        image: "04.jpg"
      }
    ]
  },
  {
    slug: "diaries-essentials",
    name: "Diaries, Planners & Corporate Essentials",
    tagline: "Everyday branding for desks, meetings and boardrooms.",
    products: [
      {
        name: "Bulk Corporate Diary Set",
        desc: "Available in black, brown and burgundy covers for large employee rollouts.",
        image: "02.jpg"
      },
      {
        name: "Signature Hardbound Diary",
        desc: "Debossed logo, ribbon marker, ivory pages — a daily reminder of your brand.",
        image: "01.jpg"
      }
    ]
  },
  {
    slug: "festive-client-hampers",
    name: "Festive & Client Gifting Hampers",
    tagline: "Diwali, milestone and relationship hampers built around your brand.",
    products: [
      {
        name: "Malabar-Style Gold Gift Box",
        desc: "Laser-cut gold box with branded centre panel, dry fruits & chocolates inside.",
        image: "01.jpg"
      },
      {
        name: "Diwali Diya & Dry Fruit Hamper",
        desc: "Gift bag with diyas, dry fruit jars, mithai and festive chocolates.",
        image: "02.jpg"
      },
      {
        name: "Bulk Festive Gift Bag (Ribbon-Tied)",
        desc: "Scaled for large employee/client distribution, hundreds of units at a time.",
        image: "03.jpg"
      },
      {
        name: "Deluxe Diya & Sweets Gift Set",
        desc: "Ceramic diyas, kaju katli, dry fruit jars and a branded carry bag.",
        image: "04.jpg"
      },
      {
        name: "Festive Ribbon Gift Bag",
        desc: "Compact gold gift bag finished with a satin ribbon bow.",
        image: "05.jpg"
      },
      {
        name: "Premium Diwali Gift Set",
        desc: "Full hamper with diyas, mithai, dry fruits and a branded gift bag.",
        image: "06.jpg"
      },
      {
        name: "Client Appreciation Gift Set",
        desc: "Nuts, roasted snacks and a scented candle in a jute-look gift bag.",
        image: "07.jpg"
      },
      {
        name: "Premium Wooden Crate Hamper",
        desc: "Tulle-wrapped wooden crate with dry fruits and a floral finish — ideal for VIP gifting.",
        image: "08.jpg"
      },
      {
        name: "Corporate Ribbon Gift Box (Bulk)",
        desc: "Matte gold box with satin ribbon, branded label — built for large-volume orders.",
        image: "09.jpg"
      }
    ]
  },
  {
    slug: "dry-fruit-chocolate-boxes",
    name: "Premium Dry Fruits, Nuts & Chocolate Boxes",
    tagline: "Gourmet gifting for clients, teams and festive occasions.",
    products: [
      {
        name: "Gold Foil Chocolate Box (9-Piece)",
        desc: "Handcrafted chocolates finished with edible gold foil, in a branded gold box.",
        image: "01.jpg"
      },
      {
        name: "Confectionery Jar Set",
        desc: "Glass jars filled with foil-wrapped chocolates, branded lid label.",
        image: "02.jpg"
      },
      {
        name: "Stacked Confectionery Jars (Bulk)",
        desc: "Uniform glass jars ready for large-scale festive or event distribution.",
        image: "03.jpg"
      },
      {
        name: "Dry Fruit Duo Jar Gift Set",
        desc: "Cashew & almond jars with a chocolate pouch, packed in a gift bag.",
        image: "04.jpg"
      },
      {
        name: "Dry Fruit & Chocolate Pouch Trio",
        desc: "Almond, cashew and crunchy-chocolate kraft pouches, sold as a set.",
        image: "05.jpg"
      }
    ]
  },
  {
    slug: "festival-kits",
    name: "Festival Celebration Kits",
    tagline: "Holi, Makar Sankranti and seasonal celebration kits for teams.",
    products: [
      {
        name: "Holi Celebration Kit",
        desc: "Branded tote with Holi t-shirt, herbal colours, pichkari & water balloons.",
        image: "01.jpg"
      },
      {
        name: "Holi Snacks & Colour Kit",
        desc: "Thandai masala, dates, popcorn and herbal Holi colours in a branded tote.",
        image: "02.jpg"
      },
      {
        name: "Holi Party Pack",
        desc: "Complete Holi flat-lay kit — colours, balloons, pichkari, snacks & t-shirt.",
        image: "03.jpg"
      },
      {
        name: "Holi Family Kit",
        desc: "Extended Holi kit with additional snacks and play accessories.",
        image: "04.jpg"
      },
      {
        name: "Makar Sankranti Kite Kit",
        desc: "Kite string spool, chikki, cap, festive mask and decorative accessories in a branded box.",
        image: "05.jpg"
      },
      {
        name: "Makar Sankranti Celebration Box",
        desc: "Visor cap, chikki, manjha and festive accessories, individually boxed.",
        image: "06.jpg"
      }
    ]
  },
  {
    slug: "branded-bags",
    name: "Branded Bags & Totes",
    tagline: "Jute and canvas totes carrying your logo well beyond the gift itself.",
    products: [
      {
        name: "Classic Jute Tote Bag",
        desc: "Durable branded jute tote, ideal as an outer carry bag for any hamper.",
        image: "01.jpg"
      },
      {
        name: "Bulk Jute Tote Bag Order",
        desc: "Scaled production for large events, conferences and festive rollouts.",
        image: "02.jpg"
      },
      {
        name: "Daisy-Accent Jute Tote",
        desc: "Jute tote finished with a decorative daisy accent for a festive touch.",
        image: "03.jpg"
      }
    ]
  }
];

// Corporate clients/brands The Box of Emotions has gifted for.
// `logo` is a filename inside public/images/brands/ — omit it for a plain text tile.
export const BRANDS = [
  { name: "Malabar Gold & Diamonds", logo: "malabar-gold-diamonds.jpg" },
  { name: "Shreeyam National TMT", logo: "shreeyam-national-tmt.jpg" },
  { name: "Satva Gold", logo: "satva-gold.jpg" },
  { name: "TBZ", logo: "tbz.jpg" },
  { name: "Musikaar", logo: "musikaar.jpg" },
  { name: "Indriya — Aditya Birla Jewellery", logo: "indriya-aditya-birla.jpg" },
  { name: "ORRA", logo: "orra.jpg" },
  { name: "The Naroda Nagrik Co-Op Bank Ltd.", logo: "naroda-nagrik-bank.jpg" }
];

export function productImage(categorySlug, filename) {
  return `/images/products/${categorySlug}/${filename}`;
}
