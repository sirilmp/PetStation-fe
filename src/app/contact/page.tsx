import type { Metadata } from "next";

import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pet Station, Kannur — address, phone, Instagram and YouTube.",
};

export default function ContactPage() {
  return <Contact />;
}
