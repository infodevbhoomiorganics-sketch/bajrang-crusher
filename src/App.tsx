import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import SandPage from "@/pages/SandPage";
import AggregatesPage from "@/pages/AggregatesPage";
import PebblesPage from "@/pages/PebblesPage";
import GalleryPage from "@/pages/GalleryPage";
import ProcessPage from "@/pages/ProcessPage";
import IndustriesPage from "@/pages/IndustriesPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import ServiceAreasPage from "@/pages/ServiceAreasPage";

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/construction-sand" element={<SandPage />} />
          <Route path="/products/stone-aggregates" element={<AggregatesPage />} />
          <Route path="/products/pebble-stones" element={<PebblesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
