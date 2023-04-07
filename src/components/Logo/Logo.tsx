import { routes } from "@/essentials/utils/routes";
import Link from "next/link";

export const Logo = () => (
  <Link
    href={routes.home}
    className={`font-primary font-bold text-3xl w-14 h-14 text-white flex items-center justify-center rounded-full bg-black`}
  >
    LN
  </Link>
);
