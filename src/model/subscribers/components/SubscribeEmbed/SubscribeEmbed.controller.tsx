"use client";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import { NewsLetterDialog } from "@/model/subscribers/components/NewsLetterDialog/NewsLetterDialog.view";
import SubscribeInputController from "@/model/subscribers/components/SubscribeInput/SubscribeInput.controller";
import classNames from "classnames";

type Props = {
  wrapperClassName?: string;
};

export default function SubscribeEmbed({ wrapperClassName }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col gap-3 font-primary items-stretch",
        wrapperClassName
      )}
    >
      <div className="flex justify-center items-center gap-1">
        <label
          className={`${typography.variants.sectionTitle({
            noGutter: true,
          })} text-center`}
        >
          Tilaa uutiskirje
        </label>
        <NewsLetterDialog variant="info_button" />
      </div>

      <div className="flex justify-center">
        <div
          className={classNames(
            typography.variants.textBody,
            palette.text.secondary,
            "text-center",
            "mb-1",
            "max-w-lg",
            "flex-1"
          )}
        >
          Uutiskirjeessä kerron, kun julkaisen uutta sisältöä. Silloin tällöin
          kirjoitan sisältöä yksinoikeudella uutiskirjeeseen.
        </div>
      </div>
      <SubscribeInputController />
    </div>
  );
}
