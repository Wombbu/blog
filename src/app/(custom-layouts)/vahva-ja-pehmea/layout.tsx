import "../../globals.css";
import "./themeVariables.css";
import { Work_Sans, Literata } from "next/font/google";
import { Metadata } from "next";
import { RootLayoutBase } from "@/components/RootLayoutBase/RootLayoutBase";

const primaryFontFamily = Work_Sans({
  subsets: ["latin"],
  variable: "--font-family-primary",
});

const secondaryFontFamily = Literata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-family-secondary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutBase
      primaryFontFamilyVariable={primaryFontFamily.variable}
      secondaryFontFamilyVariable={secondaryFontFamily.variable}
      mainClassName="max-w-screen-lg mx-auto px-4 sm:px-8 pb-8 sm:pb-12"
    >
      {children}
    </RootLayoutBase>
  );
}

export const metadata: Metadata = {
  title: "Lauri Nevanperä",
  description:
    "Asiaa kaupunkisuunnittelusta, paikallistaloudesta ja asumisesta.",
  openGraph: {
    locale: "fi_FI",
    type: "website",
    url: "https://www.laurinevanpera.fi/",
    title: "Lauri Nevanperä",
    description:
      "Asiaa kaupunkisuunnittelusta, paikallistaloudesta ja asumisesta.",
    images: [
      {
        url: "https://www.laurinevanpera.fi/api/og?imgPath=/assets/blog/elinvoimaa-kytt%C3%A4l%C3%A4%C3%A4n/kokkola1.jpg&title=Asiaa%20kaupungeista",
        width: 1200,
        height: 627,
        alt: "Lauri Nevanperä",
      },
    ],
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png?v=2",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png?v=2",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png?v=2",
    },
    { rel: "manifest", url: "/site.webmanifest?v=2" },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg?v=2",
      color: "#5bbad5",
    },
    { rel: "shortcut icon", url: "/favicon.ico?v=2" },
  ],
};
