import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

export const HeaderLink = (props: Props) => {
  return (
    <Link
      {...props}
      className="text-gray-900 font-primary text-md font-medium border-b-2 border-transparent hover:border-gray-900"
    />
  );
};
