import { typography } from "@/essentials/theme/typography";

type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
  spacing: "normal" | "loose";
};

export const Card = ({ label, children, spacing }: Props) => {
  return (
    <section className="bg-gray-100 border-2 border-gray-300 rounded-lg">
      <div
        className={`${
          spacing === "loose" ? "py-8 sm:py-16 " : "py-4 sm:py-8"
        } px-4 lg:px-6 mx-auto max-w-screen-xl`}
      >
        <div className="mx-auto max-w-screen-sm text-center">
          <h2
            className={`mb-4 ${typography.variants.sectionTitle()} font-white`}
          >
            {label}
          </h2>
          <div className={`mb-6 ${typography.variants.textBody}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
