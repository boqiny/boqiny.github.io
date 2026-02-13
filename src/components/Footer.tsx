const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Boqin Yuan. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
        <p className="text-muted-foreground/60 text-xs mt-1">
          Last updated: February 12, 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
