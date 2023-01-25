import { typography } from "@/essentials/theme/typography";
import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

export const HeaderLink = (props: Props) => {
  return <Link {...props} className={typography.variants.headerLink} />;
};
