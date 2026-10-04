import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Temporary wordmark. Swap this for the real Pet Station logo file later —
 * e.g. drop it at public/brand/logo.png and render <Image> here instead.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <PawPrint className="size-5" strokeWidth={2.25} />
      </span>
      <span className="font-display text-lg leading-none tracking-tight text-foreground">
        Pet Station
      </span>
    </span>
  );
}
