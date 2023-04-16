import { palette } from "@/essentials/theme/palette";

type Props = React.ComponentProps<"a">;

export const RoundedLinkButton = (props: Props) => {
  return (
    <a
      className={`newTabLink ${palette.text.secondary} flex justify-center items-center h-10 rounded-full font-primary text-md  bg-white hover:bg-gray-100 pr-6 pl-5 shadow-lg`}
      style={{
        border: "1px solid lightgray",
      }}
      {...props}
    />
  );
};
