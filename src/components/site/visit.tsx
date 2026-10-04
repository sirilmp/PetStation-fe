import { Clock, MapPin, Ticket } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const details = [
  {
    icon: Clock,
    title: "Timings",
    description: siteConfig.hours,
  },
  {
    icon: MapPin,
    title: "Location",
    description: siteConfig.address,
  },
  {
    icon: Ticket,
    title: "Entry",
    description:
      "Affordable entry tickets for individuals, families and groups — contact us for current pricing.",
  },
];

export function Visit() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Plan your visit
          </span>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            Everything you need to know
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {details.map((item) => (
            <Card key={item.title} className="border-border/70 bg-card">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <item.icon className="size-6" strokeWidth={2} />
              </div>
              <CardTitle className="text-foreground">{item.title}</CardTitle>
              <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
