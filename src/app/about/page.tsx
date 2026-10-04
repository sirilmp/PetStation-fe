import type { Metadata } from "next";

import { About } from "@/components/site/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Pet Station, Mattool — a family-friendly mini-zoo and pet hub on the Kannur coast.",
};

export default function AboutPage() {
  return <About />;
}
