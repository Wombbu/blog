"use client";
import { textToArray } from "@/components/AnimatedTweet/textToArray";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import { useOnScreen } from "@/essentials/utils/useOnScreen";
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
  const { containerRef, isVisible } = useOnScreen({
    intersectionObserverOptions: {
      rootMargin: "0px 0px -50% 0px",
    },
    onlyOnce: true,
  });

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-4 justify-center flex-wrap max-w-article mx-auto mb-4 p-4 border-2 ${palette.border.secondary} w-full bg-white rounded-lg`}
    >
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="flex gap-2 flex-col items-stretch flex-1">
          <div className="h-4 bg-gray-300 w-9/12 rounded-md"></div>
          <div className="h-3 bg-gray-300 w-10/12 rounded-md"></div>
        </div>
        <div className="self-start flex justify-end">
          <div className="bg-gray-300 rounded-full w-8 h-8"></div>
        </div>
      </div>
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
      {isVisible ? (
        <TypeAnimation
          className={`${typography.variants.textBody} ${palette.text.primary} my-2`}
          style={{
            fontSize: "1.25rem",
          }}
          sequence={textToArray(text)}
          wrapper="span"
          speed={80}
          aria-label="text"
        />
      ) : (
        <div className="h-6"></div>
      )}
    </div>
  );
}
