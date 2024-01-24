import { AnalyticsWrapper } from "@/components/Analytics";

/**
 * The base for every page in the application.
 *
 * Contains header, footer, analytics and customizable main component
 */
export const RootLayoutBase = ({
  children,
  primaryFontFamilyVariable,
  secondaryFontFamilyVariable,
  mainClassName,
  header,
  footer,
}: {
  children: React.ReactNode;
  primaryFontFamilyVariable: string;
  secondaryFontFamilyVariable: string;
  mainClassName: React.ComponentProps<"main">["className"];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) => (
  <html lang="fi">
    <body
      className={`font-sans ${primaryFontFamilyVariable} ${secondaryFontFamilyVariable} bg-pageColor`}
    >
      {header}
      <main className={mainClassName}>{children}</main>
      {footer}
      <AnalyticsWrapper />
    </body>
  </html>
);
