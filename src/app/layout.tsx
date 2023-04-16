import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { AnalyticsWrapper } from "@/components/Analytics";
import { Metadata } from "next";

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
};

const primaryFontFamily = Work_Sans({
  subsets: ["latin"],
  variable: "--font-family-primary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`font-sans ${primaryFontFamily.variable}`}>
        <Header />
        <main className={`max-w-screen-lg mx-auto px-4 sm:px-8 pb-6 sm:pb-8`}>
          {children}
        </main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
