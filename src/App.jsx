import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import HomePage from "./pages/HomePage.jsx";
import CataloguePage from "./pages/CataloguePage.jsx";

export default function App() {
  const { pathname } = useLocation();
  const onCatalogue = pathname.startsWith("/catalogue");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
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
