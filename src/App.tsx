import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import WhoWeArePage from "./pages/WhoWeAre";
import FromTheFounderPage from "./pages/FromTheFounder";
import CertificatesPage from "./pages/Certificates";
import QualityControlPage from "./pages/QualityControl";
import ManufacturingPage from "./pages/Manufacturing";
import EthicalWorkplacePage from "./pages/EthicalWorkplace";
import ProductsPage from "./pages/Products";
import ProductsHandbags from "./pages/ProductsHandbags";
import ProductsWallets from "./pages/ProductsWallets";
import ProductsAccessories from "./pages/ProductsAccessories";
import ContactPage from "./pages/Contact";
import AdminPage from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => {
  // 👇 Redirect if user is on root domain (non-www)
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "devainternational.com"
  ) {
    window.location.replace(
      "https://www.devainternational.com" + window.location.pathname
    );
    return null; // Prevent rendering
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/who-we-are" element={<WhoWeArePage />} />
              <Route
                path="/from-the-founder"
                element={<FromTheFounderPage />}
              />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/quality-control" element={<QualityControlPage />} />
              <Route path="/manufacturing" element={<ManufacturingPage />} />
              <Route
                path="/ethical-workplace"
                element={<EthicalWorkplacePage />}
              />
              <Route path="/products" element={<ProductsPage />} />
              <Route
                path="/products/premium-handbags"
                element={<ProductsHandbags />}
              />
              <Route
                path="/products/leather-wallets"
                element={<ProductsWallets />}
              />
              <Route
                path="/products/accessories"
                element={<ProductsAccessories />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
