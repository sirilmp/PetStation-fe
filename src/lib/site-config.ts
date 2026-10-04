export const siteConfig = {
  name: "Pet Station",
  tagline: "Kannur's favourite pet & mini-zoo experience",
  description:
    "Pet Station in Mattool, Kannur is a family-friendly mini-zoo and pet hub — come meet the animals, spend a day with your family, and discover a little slice of wildlife by the coast.",
  location: "Mattool, Kannur, Kerala",
  address: "Pet Station, Central Beach Road, Mattool North, Kannur, Kerala",
  phoneDisplay: "+91 99999 XXXXX",
  phoneHref: "tel:+9199999",
  email: "hello@petstationkannur.com",
  hours: "Open daily · 9:00 AM – 6:00 PM",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Visit", href: "/visit" },
    { label: "Contact", href: "/contact" },
  ],
  links: {
    instagram: "https://www.instagram.com/petstationkannur/?hl=en",
    youtube: "https://www.youtube.com/watch?v=coOYHFMypoE",
    mapsQuery: "Pet Station Mattool Kannur",
  },
};

export type SiteConfig = typeof siteConfig;
