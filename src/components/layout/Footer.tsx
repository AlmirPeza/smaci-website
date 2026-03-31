import { Link } from "react-router-dom";
import smaciLogo from "@/assets/smaci-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="Go to homepage">
              <img
                src={smaciLogo}
                alt="Smaci Ltd logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Smaci Ltd
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Structural and groundworks contractor based in London.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link to="/privacy" className="text-gray-600 transition hover:text-red-600">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-600 transition hover:text-red-600">
              Cookies
            </Link>
            <Link to="/contact" className="text-gray-600 transition hover:text-red-600">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-black/10 pt-6">
          <p className="text-sm text-gray-500">
            © {currentYear} Smaci Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};