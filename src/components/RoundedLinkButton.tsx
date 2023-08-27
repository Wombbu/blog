import { button } from "@/essentials/theme/button";
import { palette } from "@/essentials/theme/palette";

type Props = React.ComponentProps<"a">;

export const RoundedLinkButton = (props: Props) => {
  return <a className={`${button.variants.rounded}`} {...props} />;
};
