import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Work_Sans, Vollkorn } from "@next/font/google";
import { Footer } from "@/components/Footer/Footer";

const primaryFontFamily = Work_Sans({
  subsets: ["latin"],
  variable: "--font-family-primary",
});
const secondaryFontFamily = Vollkorn({
  subsets: ["latin"],
  variable: "--font-family-secondary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`font-sans ${primaryFontFamily.variable}  ${secondaryFontFamily.variable}`}
      >
        <Header />
        <main className={`max-w-screen-lg mx-auto px-6 sm:px-8 pb-6 sm:pb-8`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
