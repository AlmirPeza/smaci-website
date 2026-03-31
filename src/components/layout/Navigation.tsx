import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Sectors", path: "/sectors" },
  { label: "Insights", path: "/insights" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMobileMenu = () => setMobileOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleContactClick = () => {
    closeMobileMenu();

    if (location.pathname === "/") {
      const section = document.getElementById("contact-section");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    navigate("/contact");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Smaci Ltd
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                isActive(link.path) ? "text-red-600" : "text-black hover:text-red-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={handleContactClick}
            className="rounded-none border border-black px-5 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center text-black lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`py-3 text-sm font-medium ${
                  isActive(link.path) ? "text-red-600" : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleContactClick}
              className="mt-3 w-fit border border-black px-5 py-2 text-sm font-semibold text-black"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};