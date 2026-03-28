import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Smaci Ltd
          </p>
          <p className="max-w-md text-sm leading-7 text-gray-600">
            Structural and groundworks contractor based in London, focused on
            quality, delivery, and reliability.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-600 lg:items-end">
          <div className="flex gap-5">
            <Link to="/privacy" className="transition hover:text-black">
              Privacy
            </Link>
            <Link to="/cookies" className="transition hover:text-black">
              Cookies
            </Link>
            <Link to="/contact" className="transition hover:text-black">
              Contact
            </Link>
          </div>
          <p>© {year} Smaci Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};