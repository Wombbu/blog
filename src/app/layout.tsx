import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Work_Sans, Vollkorn } from "@next/font/google";

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
        <main className={`max-w-screen-lg mx-auto px-4 sm:px-8 pb-6`}>
          {children}
        </main>
      </body>
    </html>
  );
}
