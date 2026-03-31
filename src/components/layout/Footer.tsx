import { Link } from "react-router-dom";
import smaciLogo from "@/assets/smaci-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="Go to homepage">
              <img src={smaciLogo} alt="Smaci Ltd logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Smaci Ltd. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};