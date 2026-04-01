import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Sectors from "@/pages/Sectors";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import Careers from "@/pages/Careers";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f6f6f6] text-black">
        <ScrollToTop />
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}