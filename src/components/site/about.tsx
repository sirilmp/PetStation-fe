import { Heart, Leaf, Users } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: Heart,
    title: "Animal-first care",
    description:
      "Every habitat at Pet Station is built around the comfort and wellbeing of its animals, looked after by a dedicated, caring team.",
  },
  {
    icon: Users,
    title: "Fun for every age",
    description:
      "From toddlers to grandparents, Pet Station is designed as a relaxed day out for the whole family by the Kannur coast.",
  },
  {
    icon: Leaf,
    title: "A slice of nature",
    description:
      "Set in Mattool, our mini-zoo brings you close to birds, mammals, reptiles and more in a calm, green, coastal setting.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            About Pet Station
          </span>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            A beloved mini-zoo and pet hub on Kannur&apos;s coast
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pet Station, Mattool has grown into one of Kannur&apos;s most
            visited family spots — a place where curious kids and animal
            lovers get up close with birds, mammals and more, all just steps
            from the Central Beach Road.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-border/70 bg-card transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <pillar.icon className="size-6" strokeWidth={2} />
              </div>
              <CardTitle className="text-foreground">
                {pillar.title}
              </CardTitle>
              <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
