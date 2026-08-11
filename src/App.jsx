import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import HomePage from "./pages/HomePage.jsx";
import CataloguePage from "./pages/CataloguePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import GiftingPage from "./pages/GiftingPage.jsx";
import GiftingSegmentPage from "./pages/GiftingSegmentPage.jsx";

export default function App() {
  const { pathname } = useLocation();
  const onCatalogue = pathname.startsWith("/catalogue") || pathname.startsWith("/gifting");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/catalogue/product/:sno" element={<ProductDetailPage />} />
        <Route path="/gifting" element={<GiftingPage />} />
        <Route path="/gifting/:segment" element={<GiftingSegmentPage />} />
      </Routes>
      <Footer minimal={onCatalogue} />
      <WhatsAppFloat
        message={
          onCatalogue
            ? "Hi Box of Emotion, I'm browsing your catalogue and would like a quote for a bulk order."
            : "Hi Box of Emotion, I'd like to enquire about corporate gifting."
        }
      />
    </>
  );
}
