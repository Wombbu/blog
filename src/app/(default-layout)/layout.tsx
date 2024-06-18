import "../globals.css";
import "./themeVariables.css";
import { Metadata } from "next";
import { RootLayoutBase } from "@/components/RootLayoutBase/RootLayoutBase";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { defaultLayoutGoogleFontClassNames } from "@/app/(default-layout)/defaultLayoutGoogleFontClassNames";

const { primaryFontClassName, secondaryFontClassName } =
  defaultLayoutGoogleFontClassNames;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutBase
      primaryFontFamilyVariable={primaryFontClassName}
      secondaryFontFamilyVariable={secondaryFontClassName}
      mainClassName="max-w-screen-lg mx-auto px-4 sm:px-8 pb-8 sm:pb-12"
      header={<Header />}
      footer={<Footer />}
    >
      {children}
    </RootLayoutBase>
  );
}

export const metadata: Metadata = {
  title: "Lauri Nevanperä",
  description:
    "Taloudellisesti vahvan ja asukkaalle pehmeän Tampereen puolesta",
  openGraph: {
    locale: "fi_FI",
    type: "website",
    url: "https://www.laurinevanpera.fi/",
    title: "Lauri Nevanperä",
    description:
      "Taloudellisesti vahvan ja asukkaalle pehmeän Tampereen puolesta",
    images: [
      {
        url: "https://www.laurinevanpera.fi/api/og?imgPath=/assets/blog/elinvoimaa-kytt%C3%A4l%C3%A4%C3%A4n/kokkola1.jpg&title=Taloudellisesti%20vahvan%20ja%20asukkaalle%20pehme%C3%A4n%20Tampereen%20puolesta",
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
