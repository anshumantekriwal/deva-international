
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

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="/from-the-founder" element={<FromTheFounderPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/quality-control" element={<QualityControlPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/ethical-workplace" element={<EthicalWorkplacePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
