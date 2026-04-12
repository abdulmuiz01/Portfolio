'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "about", href: "#about" },
  { label: "stack", href: "#stack" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm font-bold text-primary">
          {"<dev />"}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              .{link.label}()
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              .{link.label}()
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
