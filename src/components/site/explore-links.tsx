import Link from "next/link";
import { ArrowRight, Heart, Images, MapPinned, PhoneCall } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

const links = [
  {
    href: "/about",
    icon: Heart,
    title: "About Pet Station",
    description: "Our story and what makes a visit here special.",
  },
  {
    href: "/gallery",
    icon: Images,
    title: "Gallery",
    description: "A glimpse of the animals and moments you'll find here.",
  },
  {
    href: "/visit",
    icon: MapPinned,
    title: "Plan Your Visit",
    description: "Timings, location and everything you need to know.",
  },
  {
    href: "/contact",
    icon: PhoneCall,
    title: "Contact Us",
    description: "Reach out, follow along, or find us on the map.",
  },
];

export function ExploreLinks() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Explore Pet Station
          </span>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            Everything in one place
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group block">
              <Card className="h-full border-border/70 bg-card transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <link.icon className="size-6" strokeWidth={2} />
                </div>
                <CardTitle className="text-foreground">
                  {link.title}
                </CardTitle>
                <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
                  {link.description}
                </CardContent>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
