"use client";
import { Modal } from "@/components/Modal/Modal";
import { button } from "@/essentials/theme/button";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import SubscribeController from "@/model/subscribers/components/SubscribeInput/SubscribeInput.controller";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { MdInfoOutline, MdOutlineMail } from "react-icons/md";

type Props = {
  variant: "info_button" | "rounded_cta_button";
};

const buttonVariantMap: Record<
  Props["variant"],
  React.FunctionComponent<{
    onClick: () => void;
    className?: string;
  }>
> = {
  info_button: (props) => (
    <button
      onClick={props.onClick}
      className={classNames(button.iconButton.rounded.medium, "inline-block")}
    >
      <MdInfoOutline className={classNames("h-6 w-6")} />
    </button>
  ),
  rounded_cta_button: (props) => (
    <button {...props} className={classNames(button.rounded.primary.medium)}>
      {<MdOutlineMail />}
      Tilaa uutiskirje
    </button>
  ),
};

/**
 * Opens a dialog with a subscribe form when clicked.
 *
 * @param props.variant - The variant of the button.
 *    infoButton = A small info icon button. To be used with existing text
 *    rounded_cta_button = A rounded button with CTA text. To be used as standalone CTA
 *
 */
export const NewsLetterDialog = (props: Props) => {
  const Component = buttonVariantMap[props.variant];
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Component onClick={() => setOpen(true)} />
      <Modal
        label={<>Tilaa uutiskirje</>}
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <p
          className={classNames(
            typography.variants.textBody,
            palette.text.secondary,
            "mb-6",
            "text-start"
          )}
        >
          Uutiskirjeessä kerron kun julkaisen uutta sisältöä, ja silloin tällöin
          kirjoitan yksinoikeudella tilaajille.
        </p>
        <SubscribeController
          wrapperClassName="mb-6"
          placeholder="Sähköpostiosoitteesi"
        />
        <figure>
          <figcaption
            className={classNames(
              "text-center",
              typography.variants.caption,
              "mb-3"
            )}
          >
            Esimerkki uutiskirjeestä
          </figcaption>
          <Image
            alt="Kuva esimerkkisähköpostista"
            src="/email-example.jpg"
            width={400}
            height={400}
          />
        </figure>
      </Modal>
    </>
  );
};
