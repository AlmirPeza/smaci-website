import { Link } from "react-router-dom";

import smaciLogo from "@/assets/smaci-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Link to="/" aria-label="Go to homepage">
                <img src={smaciLogo} alt="Smaci Ltd logo" className="h-10 w-auto" />
              </Link>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Smaci Ltd
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Structural and groundworks contractor website scaffold built with a
              clean, professional layout and reusable React components.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link to="/privacy" className="text-gray-600 transition hover:text-red-600">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-600 transition hover:text-red-600">
              Cookies
            </Link>
            <p className="text-gray-500">© {currentYear} Smaci Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
};