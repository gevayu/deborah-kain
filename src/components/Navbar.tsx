import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
{ label: "אודות", href: "/about" },
{
  label: "השירותים שלנו",
  href: "/services",
  children: [
  { label: "ליווי אישי", href: "/services/personal" },
  { label: "סדנאות קבוצתיות", href: "/services" },
  { label: "סול קולאז'", href: "/services/soul-collage" },
  { label: "פוטותרפיה", href: "/services/phototherapy" }]

},
{ label: "סול קולאז'", href: "/services/soul-collage" },
{ label: "פוטותרפיה", href: "/services/phototherapy" },
{ label: "שאלות נפוצות", href: "/faq" },
{ label: "החיים עצמם - בלוג", href: "/blog" },
{ label: "צרו קשר", href: "/contact" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SoulRoad - דבורה קיין רייניש" className="h-16 w-auto" />
          <span className="text-foreground/70 font-body leading-tight text-right text-xl">
            פסיכולוגית מומחית,<br />פוטותרפיסטית ומלווה רוחנית
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
          <li
            key={item.href}
            className="relative"
            onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}>
            
              <Link
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors font-body text-lg font-medium flex items-center gap-1">
              
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && openDropdown === item.label &&
            <ul className="absolute top-full right-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                  {item.children.map((child) =>
              <li key={child.href}>
                      <Link
                  to={child.href}
                  className="block px-4 py-2 text-base text-foreground/80 hover:text-primary hover:bg-muted transition-colors font-body">
                  
                        {child.label}
                      </Link>
                    </li>
              )}
                </ul>
            }
            </li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="תפריט">
          
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen &&
      <div className="lg:hidden bg-background border-t border-border">
          <ul className="flex flex-col items-center gap-2 py-6">
            {navItems.map((item) =>
          <li key={item.href} className="w-full text-center">
                {item.children ?
            <button
              onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
              className="block w-full py-2 text-foreground/80 hover:text-primary transition-colors font-body text-base">
              
                    {item.label}
                  </button> :

            <Link
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-foreground/80 hover:text-primary transition-colors font-body text-base">
              
                    {item.label}
                  </Link>
            }
                {item.children && openDropdown === item.label &&
            <ul className="bg-muted/50 py-1">
                    {item.children.map((child) =>
              <li key={child.href}>
                        <Link
                  to={child.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors font-body">
                  
                          {child.label}
                        </Link>
                      </li>
              )}
                  </ul>
            }
              </li>
          )}
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;