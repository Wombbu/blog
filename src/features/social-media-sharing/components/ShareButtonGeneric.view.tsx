import { IconShareAndroid } from "@/features/social-media-sharing/components/IconShareAndroid";
import { button } from "@/essentials/theme/button";
import classNames from "classnames";

type Props = React.ComponentProps<"button">;

export const ShareButtonGeneric = (props: Props) => {
  return (
    <button
      {...props}
      className={classNames(button.rounded.secondary.medium, props.className)}
    >
      {<IconShareAndroid />}
      {props.children}
    </button>
  );
};
