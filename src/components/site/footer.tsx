import { Logo } from "@/components/site/logo";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#0f4c33] text-background/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <Logo className="text-background [&_span]:text-background" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              {siteConfig.tagline} — {siteConfig.location}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-background/70 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center rounded-full border border-background/20 text-background/80 hover:border-accent hover:text-accent"
            aria-label="Pet Station on Instagram"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>

        <Separator className="my-8 bg-background/15" />

        <p className="text-xs text-background/50">
          &copy; {new Date().getFullYear()} Pet Station, Mattool. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
