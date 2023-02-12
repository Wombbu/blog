import { palette } from "@/essentials/theme/palette";
import Image from "next/image";

type Props = { tweetUrl: string };

export const CommentOnTwitter = ({ tweetUrl }: Props) => {
  return (
    <div className="sticky bottom-4 flex items-center justify-center">
      <a
        href={tweetUrl}
        target="_blank"
        rel="noreferrer"
        className={`${palette.text.secondary} flex justify-center items-center h-10 rounded-full font-primary text-md  bg-white hover:bg-gray-100 px-6`}
        style={{
          boxShadow: "rgb(0 0 0 / 10%) 0px 2px 10px 0px",
        }}
      >
        <Image
          src="/twitter-logo-blue.svg"
          alt="twitter-logo"
          width={16}
          height={16}
          className={`mr-2`}
        />{" "}
        Kommentoi
      </a>
    </div>
  );
};
