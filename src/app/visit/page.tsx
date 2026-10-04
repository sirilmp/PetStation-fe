import type { Metadata } from "next";

import { Visit } from "@/components/site/visit";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Timings, location and entry details for visiting Pet Station, Kannur.",
};

export default function VisitPage() {
  return <Visit />;
}
