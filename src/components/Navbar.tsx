import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-amber/60 group-hover:border-amber transition-colors" />
        <span className="absolute inset-[3px] rounded-full border border-bone/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
      </span>
      <span className="font-display text-lg font-medium tracking-tight">
        MERIDIAN
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-bone/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between lg:h-20">
        <BrandMark />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-bone/70 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta"
            className="text-sm text-bone/70 transition-colors hover:text-bone"
          >
            登录
          </a>
          <a
            href="#cta"
            className="rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink-900 transition-all hover:bg-amber-400 hover:shadow-[0_0_24px_-4px_rgba(232,163,61,0.6)]"
          >
            免费开始
          </a>
        </div>

        <button
          type="button"
          aria-label="切换菜单"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-bone md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-bone/10 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-bone/80 transition-colors hover:bg-ink-700 hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-3">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-amber px-5 py-3 text-center text-sm font-medium text-ink-900"
                >
                  免费开始
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
