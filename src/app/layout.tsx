import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Work_Sans } from "@next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { AnalyticsWrapper } from "@/components/Analytics";

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
      <head />
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
