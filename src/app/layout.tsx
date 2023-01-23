import "./globals.css";
import { Work_Sans } from "@next/font/google";
// https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa
const work = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <style jsx global>
        {`
          :root {
            --work-sans: ${work.style.fontFamily};
          }
        `}
      </style>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
