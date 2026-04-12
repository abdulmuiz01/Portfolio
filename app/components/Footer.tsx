'use client'
const Footer = () => (
  <footer className="py-8 px-6">
    <div className=" mx-auto flex items-center justify-between gap-4">
      <p className=" text-xs text-muted-foreground">
        © {new Date().getFullYear()} // built with passion & caffeine
      </p>
      <p className="text-xs text-muted-foreground">
        <span className="text-primary"> status</span>: available for hire
      </p>
    </div>
  </footer>
);

export default Footer;
