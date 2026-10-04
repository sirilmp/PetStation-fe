import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PawPrint, Rabbit, Bird, Fish } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { label: "Happy visitors", value: "50K+" },
  { label: "Species to meet", value: "40+" },
  { label: "Years of care", value: "10+" },
];

// Drop the real Pet Station front-view photo at one of these paths
// (public/images/petstation-front.jpg is the simplest) and the hero
// switches to it automatically — no code changes needed.
const HERO_IMAGE_CANDIDATES = [
  "petstation-front.jpg",
  "petstation-front.jpeg",
  "petstation-front.png",
  "petstation-front.webp",
];

function getHeroImageSrc() {
  for (const name of HERO_IMAGE_CANDIDATES) {
    const filePath = path.join(process.cwd(), "public", "images", name);
    if (fs.existsSync(filePath)) {
      return `/images/${name}`;
    }
  }
  return null;
}

export function Hero() {
  const heroImageSrc = getHeroImageSrc();

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* decorative background — all four brand hues */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="absolute top-1/3 -right-32 size-[28rem] rounded-full bg-brand-purple/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-brand-green/15 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          aria-hidden="true"
        >
          <pattern
            id="hero-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="currentColor" className="text-brand-yellow" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-28">
        <div className="text-ink-foreground">
          <Badge
            variant="accent"
            className="mb-6 bg-brand-yellow text-[#2b1a00]"
          >
            <MapPin className="size-3.5" />
            Kannur, Kerala
          </Badge>

          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-ink-foreground sm:text-5xl lg:text-6xl">
            Where every family
            <br />
            finds a new{" "}
            <span className="relative inline-block text-brand-yellow">
              furry friend
            </span>
            .
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-foreground/80">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-brand-yellow text-[#2b1a00] hover:bg-brand-yellow/90"
            >
              <Link href="/visit">
                Plan Your Visit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
            >
              <Link href="/about">Meet the Animals</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-2xl text-brand-yellow sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs text-ink-foreground/70 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {heroImageSrc ? (
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-green opacity-60 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-ink-foreground/10 shadow-2xl sm:aspect-[5/6]">
              <Image
                src={heroImageSrc}
                alt="Pet Station — front view"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 90vw"
              />
            </div>
          </div>
        ) : (
          // Illustrative placeholder — swap automatically once
          // public/images/petstation-front.jpg is added.
          <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-lg">
            <div className="col-span-2 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-blue/20 to-background shadow-xl sm:h-52">
              <PawPrint className="size-16 text-brand-blue" strokeWidth={1.5} />
            </div>
            <div className="flex h-36 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-yellow/80 to-brand-yellow shadow-xl sm:h-40">
              <Rabbit className="size-12 text-[#2b1a00]/80" strokeWidth={1.5} />
            </div>
            <div className="flex h-36 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-green/30 to-background shadow-xl sm:h-40">
              <Bird className="size-12 text-brand-green" strokeWidth={1.5} />
            </div>
            <div className="col-span-2 flex h-28 items-center justify-center gap-4 rounded-3xl bg-background/95 shadow-xl">
              <Fish className="size-10 text-brand-purple" strokeWidth={1.5} />
              <span className="font-display text-sm text-ink sm:text-base">
                40+ species under one roof
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
