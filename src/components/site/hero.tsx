import { ArrowRight, MapPin, PawPrint, Rabbit, Bird, Fish } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { label: "Happy visitors", value: "50K+" },
  { label: "Species to meet", value: "40+" },
  { label: "Years of care", value: "10+" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 size-[28rem] rounded-full bg-secondary/10 blur-3xl" />
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
            <circle cx="2" cy="2" r="2" fill="currentColor" className="text-secondary" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-28">
        <div className="text-secondary-foreground">
          <Badge
            variant="accent"
            className="mb-6 bg-accent/90 text-accent-foreground"
          >
            <MapPin className="size-3.5" />
            Mattool &middot; Kannur, Kerala
          </Badge>

          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-background sm:text-5xl lg:text-6xl">
            Where every family
            <br />
            finds a new{" "}
            <span className="relative inline-block text-accent">
              furry friend
            </span>
            .
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/85">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href="#visit">
                Plan Your Visit
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/40 text-background hover:bg-background hover:text-primary"
            >
              <a href="#about">Meet the Animals</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-background/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-2xl text-accent sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs text-background/70 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Illustrative photo collage — swap these tiles for real Pet Station photos */}
        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-lg">
          <div className="col-span-2 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-secondary to-background/90 shadow-xl sm:h-52">
            <PawPrint className="size-16 text-primary/70" strokeWidth={1.5} />
          </div>
          <div className="flex h-36 items-center justify-center rounded-3xl bg-gradient-to-br from-accent/80 to-accent shadow-xl sm:h-40">
            <Rabbit className="size-12 text-accent-foreground/80" strokeWidth={1.5} />
          </div>
          <div className="flex h-36 items-center justify-center rounded-3xl bg-gradient-to-br from-background/90 to-secondary shadow-xl sm:h-40">
            <Bird className="size-12 text-primary/70" strokeWidth={1.5} />
          </div>
          <div className="col-span-2 flex h-28 items-center justify-center gap-4 rounded-3xl bg-background/95 shadow-xl">
            <Fish className="size-10 text-primary/70" strokeWidth={1.5} />
            <span className="font-display text-sm text-primary/80 sm:text-base">
              40+ species under one roof
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
