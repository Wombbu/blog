"use client";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type Props = {
  imgSrc?: string;
  /**
   * The text to animate.
   *
   * To add a 500 ms break, add a | character as a delimiter
   */
  text: string;
};

export default function AnimatedTweet({ imgSrc, text }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 justify-center flex-wrap max-w-article mx-auto mb-4 p-4 border-2 ${palette.border.secondary} w-full bg-white rounded-lg`}
    >
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={"Tweetin kuva"}
          width={600}
          height={300}
          loading="lazy"
          className="object-cover rounded-md"
        />
      ) : null}

      <TypeAnimation
        className={`${typography.variants.textBody} ${palette.text.primary} my-2 h-12 sm:h-auto`}
        style={{
          fontSize: "1.25rem",
        }}
        // Append the previous text to the current text
        sequence={text.split("|")}
        wrapper="span"
        speed={60}
        aria-label="text"
      />
    </div>
  );
}
