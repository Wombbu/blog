import { IconShareAndroid } from "@/features/social-media-sharing/components/IconShareAndroid";
import { IconShareIos } from "@/features/social-media-sharing/components/IconShareIos";
import { button } from "@/essentials/theme/button";

type Props = React.ComponentProps<"button">;

export const ShareButtonGeneric = (props: Props) => {
  const isApple =
    /iPhone|iPad/i.test(navigator.userAgent) ||
    navigator.userAgent.includes("Mac");

  return (
    <button {...props} className={button.variants.rounded}>
      {isApple ? <IconShareIos /> : <IconShareAndroid />}
      {props.children}
    </button>
  );
};
