"use client";

import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pet Station on Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
          >
            <InstagramIcon className="size-5" />
          </a>
          <Button asChild size="default">
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" />
              Call Us
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-4 flex flex-col gap-6">
              <Logo />
              <nav className="flex flex-col gap-4">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-semibold text-foreground/90 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3 pt-4">
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 hover:border-accent hover:text-accent"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <Button asChild className="flex-1">
                  <a href={siteConfig.phoneHref}>
                    <Phone className="size-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
