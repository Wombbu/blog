import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

export const HeaderLink = (props: Props) => {
  return (
    <Link
      {...props}
      className="text-gray-900 font-primary text-xl font-bold hover:underline decoration-3"
    />
  );
};
