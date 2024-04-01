import { typography } from "@/essentials/theme/typography";

type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
  labelButton?: React.ReactNode;
  alignCenter?: boolean;
} & React.ComponentProps<"section">;

export const Card = ({
  label,
  children,
  labelButton,
  alignCenter,
  ...rest
}: Props) => {
  return (
    <section
      {...rest}
      className={`bg-gray-100 border-2 border-gray-300 rounded-lg ${
        rest.className || ""
      }`}
    >
      <div className={`py-4 sm:py-8 px-4 lg:px-6`}>
        <div className={`mx-auto ${alignCenter ? "text-center" : ""}`}>
          <div className="flex justify-between">
            <h2
              className={`mb-4 ${typography.variants.sectionTitle()} font-white flex-1 ${
                alignCenter ? "text-center" : ""
              }`}
            >
              {label}
            </h2>
            {labelButton}
          </div>
          <div
            className={`${typography.variants.textBody} whitespace-pre-line`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
