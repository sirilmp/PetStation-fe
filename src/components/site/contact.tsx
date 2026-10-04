import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { YoutubeIcon } from "@/components/site/youtube-icon";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: "@petstationkannur — daily photos & reels of our animals.",
    href: siteConfig.links.instagram,
    cta: "View Profile",
  },
  {
    icon: YoutubeIcon,
    title: "YouTube",
    description: "Watch Pet Station videos — tour the mini-zoo before you visit.",
    href: siteConfig.links.youtube,
    cta: "Watch Video",
  },
];

export function Contact() {
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.links.mapsQuery
  )}&output=embed`;

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-green uppercase">
            Get in touch
          </span>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-ink-foreground sm:text-4xl">
            Come say hello
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-foreground/80">
            Reach out, follow along, or find us on the map below — we&apos;d
            love to welcome you and your family to Pet Station.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-1">
            <Card className="border-ink-foreground/10 bg-background/95">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <CardTitle className="text-foreground">Address</CardTitle>
                  <CardContent className="p-0 text-sm text-muted-foreground">
                    {siteConfig.address}
                  </CardContent>
                </div>
              </div>
            </Card>

            <Card className="border-ink-foreground/10 bg-background/95">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <Phone className="size-5" />
                </span>
                <div>
                  <CardTitle className="text-foreground">Phone</CardTitle>
                  <CardContent className="p-0 text-sm text-muted-foreground">
                    <a
                      href={siteConfig.phoneHref}
                      className="hover:text-primary"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </CardContent>
                </div>
              </div>
            </Card>

            <Card className="border-ink-foreground/10 bg-background/95">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <Mail className="size-5" />
                </span>
                <div>
                  <CardTitle className="text-foreground">Email</CardTitle>
                  <CardContent className="p-0 text-sm text-muted-foreground">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ink-foreground/10 lg:col-span-2">
            <iframe
              title="Pet Station location map"
              src={mapsEmbedSrc}
              className="h-72 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:mx-auto sm:max-w-xl">
          {channels.map((channel) => (
            <Card
              key={channel.title}
              className="border-ink-foreground/10 bg-background/95"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <channel.icon className="size-5" />
              </div>
              <CardTitle className="text-foreground">
                {channel.title}
              </CardTitle>
              <CardContent className="p-0 text-sm text-muted-foreground">
                {channel.description}
              </CardContent>
              <Button asChild variant="link" className="h-auto self-start p-0">
                <a href={channel.href} target="_blank" rel="noopener noreferrer">
                  {channel.cta}
                  <ExternalLink className="size-3.5" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
