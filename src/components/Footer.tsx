import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="SoulRoad" className="h-24 mx-auto mb-6" />
        <p className="text-muted-foreground font-body text-sm">
          דבורה קיין-רייניש — פסיכולוגית ופוטותרפיסטית
        </p>
        <p className="text-muted-foreground/60 font-body text-xs mt-4">
          © {new Date().getFullYear()} SoulRoad. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
