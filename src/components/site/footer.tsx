import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { YoutubeIcon } from "@/components/site/youtube-icon";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <Logo className="text-ink-foreground [&_span]:text-ink-foreground" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              {siteConfig.tagline} — {siteConfig.location}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-foreground/70 hover:text-brand-yellow"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 hover:border-brand-yellow hover:text-brand-yellow"
              aria-label="Pet Station on Instagram"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 hover:border-brand-yellow hover:text-brand-yellow"
              aria-label="Pet Station on YouTube"
            >
              <YoutubeIcon className="size-5" />
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-ink-foreground/15" />

        <p className="text-xs text-ink-foreground/50">
          &copy; {new Date().getFullYear()} Pet Station, Mattool. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
