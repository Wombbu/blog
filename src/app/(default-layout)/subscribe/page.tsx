import { routes } from "@/essentials/utils/routes";
import { Metadata } from "next";
import { typography } from "@/essentials/theme/typography";
import classNames from "classnames";
import Image from "next/image";
import { palette } from "@/essentials/theme/palette";
import SubscribeInputController from "@/model/subscribers/components/SubscribeInput/SubscribeInput.controller";
import emailImageSrc from "../../../../public/email-example.jpg";
import Link from "next/link";
import { button } from "@/essentials/theme/button";
import { MdArrowBack } from "react-icons/md";

export default function Subscribe() {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <h1 className={classNames(typography.variants.largeTitle)}>
          Tilaa uutiskirje
        </h1>
        <div className="flex justify-center">
          <div className="flex-1 max-w-lg ">
            <p
              className={classNames(
                typography.variants.textBody,
                palette.text.secondary,
                "text-center"
              )}
            >
              Uutiskirjeessä kerron kun julkaisen uutta sisältöä, ja silloin
              tällöin kirjoitan yksinoikeudella tilaajille.
            </p>
          </div>
        </div>
        <SubscribeInputController wrapperClassName="flex-1 self-stretch" />
        <figure>
          <figcaption
            className={classNames(
              typography.variants.caption,
              "text-center",
              "mt-6"
            )}
          >
            Esimerkki uutiskirjeestä
          </figcaption>
          <Image
            src={emailImageSrc}
            alt="Lauri Nevanperä"
            className="self-center"
            width={600}
          />
        </figure>
        <Link
          href={routes.posts}
          className={classNames(button.rectangular.primary.medium)}
        >
          <MdArrowBack /> Artikkeleihin
        </Link>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Tilaa uutiskirje",
  description:
    "Uutiskirjeessä kerron kun julkaisen uutta sisältöä, ja silloin tällöin kirjoitan yksinoikeudella tilaajille.",
  openGraph: {
    locale: "fi_FI",
    type: "website",
    url: "https://www.laurinevanpera.fi/subscribe",
    title: "Tilaa uutiskirje",
    description:
      "Uutiskirjeessä kerron kun julkaisen uutta sisältöä, ja silloin tällöin kirjoitan yksinoikeudella tilaajille.",
    images: [
      {
        url: "https://www.laurinevanpera.fi/api/og?imgPath=/assets/blog/elinvoimaa-kytt%C3%A4l%C3%A4%C3%A4n/kokkola2.jpg&title=Tilaa%20uutiskirje",
        width: 1200,
        height: 627,
        alt: "Lauri Nevanperä",
      },
    ],
  },
};
