import type { Metadata } from "next";

import { Gallery } from "@/components/site/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse of life at Pet Station, Kannur.",
};

export default function GalleryPage() {
  return <Gallery />;
}
