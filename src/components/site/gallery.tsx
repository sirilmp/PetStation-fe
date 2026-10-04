import {
  Bird,
  Cat,
  Fish,
  PawPrint,
  Rabbit,
  Squirrel,
  Turtle,
  Dog,
} from "lucide-react";

import { cn } from "@/lib/utils";

const tiles = [
  { icon: Bird, bg: "from-secondary to-background", span: "sm:col-span-2" },
  { icon: Rabbit, bg: "from-accent/70 to-accent" },
  { icon: Turtle, bg: "from-primary/80 to-primary" },
  { icon: Cat, bg: "from-background to-secondary" },
  { icon: Fish, bg: "from-accent/60 to-secondary", span: "sm:col-span-2" },
  { icon: Dog, bg: "from-brand-purple/60 to-secondary" },
  { icon: Squirrel, bg: "from-secondary to-accent/60" },
];

export function Gallery() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold tracking-wide text-brand-purple uppercase">
              Gallery
            </span>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
              A glimpse of life at Pet Station
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Real photos coming soon — follow us on Instagram for the latest
            residents and daily updates.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={cn(
                "flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br shadow-sm",
                tile.bg,
                tile.span
              )}
            >
              <tile.icon
                className="size-10 text-primary/60 sm:size-12"
                strokeWidth={1.5}
              />
            </div>
          ))}
          <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-primary/30 bg-background/60 text-center">
            <PawPrint className="size-8 text-primary/50" />
            <span className="px-3 text-xs font-medium text-muted-foreground">
              More photos on Instagram
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
