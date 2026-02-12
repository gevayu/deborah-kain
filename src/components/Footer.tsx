import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "בית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "השירותים שלנו", href: "/services" },
  { label: "המסע האישי", href: "/journey" },
  { label: "החיים עצמם", href: "/blog" },
  { label: "צרו קשר", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-teal-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <img src={logo} alt="SoulRoad" className="h-[7.5rem] mx-auto brightness-0 invert opacity-80" />

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-primary-foreground/15 w-full max-w-md pt-6 text-center">
            <p className="text-primary-foreground/60 font-body text-base">
              דבורה קיין-רייניש — פסיכולוגית ופוטותרפיסטית
            </p>
            <p className="text-primary-foreground/40 font-body text-sm mt-2">
              © {new Date().getFullYear()} SoulRoad. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
