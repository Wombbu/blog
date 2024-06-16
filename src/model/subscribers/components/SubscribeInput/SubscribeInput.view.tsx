import { button } from "@/essentials/theme/button";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import classNames from "classnames";
import { useState } from "react";

type Props = {
  onApply: (email: string) => void;
  status:
    | "idle"
    | "loading"
    | "success"
    | "error_generic"
    | "error_invalid_email"
    | "already_subscribed"
    | "error_rate_limit";
  wrapperClassName?: string;
  placeholder?: string;
};

export const SubscribeInput = ({
  onApply,
  status,
  wrapperClassName,
  placeholder,
}: Props) => {
  const [email, setEmail] = useState("");
  return (
    <div
      className={classNames(
        "flex flex-col gap-3 font-primary items-stretch",
        wrapperClassName
      )}
    >
      <form
        className="flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          onApply(email);
        }}
      >
        <div
          className={`flex flex-1 items-stretch bg-white border-2 max-w-sm border-black`}
        >
          <input
            type="email"
            required
            placeholder={placeholder || "Kirjoita sähköpostiosoitteesi"}
            className="px-2 py-3 min-w-0 flex-1 bg-transparent focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={classNames(
              button.rectangular.primary.medium,
              "whitespace-nowrap"
            )}
            data-loading={status === "loading"}
            disabled={status === "success" || status === "already_subscribed"}
          >
            {status === "success" || status === "already_subscribed"
              ? "Tilattu!"
              : null}
            {status === "error_generic" ||
            status === "idle" ||
            status === "loading" ||
            status === "error_invalid_email" ||
            status === "error_rate_limit"
              ? "Tilaa"
              : null}
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        {status === "error_generic" ? (
          <p
            className={`${typography.variants.textBody} ${palette.text.secondary} text-center max-w-sm flex-1`}
          >
            ❌ Jotain meni pieleen. Jos ongelma toistuu, voit olla yhteydessä
            lauri@laurinevanpera.fi
          </p>
        ) : null}
        {status === "error_rate_limit" ? (
          <p
            className={`${typography.variants.textBody} ${palette.text.secondary} text-center max-w-sm flex-1`}
          >
            ❌ Liikaa pyyntöjä 🙂. Yritä huomenna uudelleen.
          </p>
        ) : null}
        {status === "already_subscribed" ? (
          <p
            className={`${typography.variants.textBody} ${palette.text.secondary} text-center max-w-sm flex-1`}
          >
            ✅ Näyttää, että olet tilannut uutiskirjeen jo aiemmin. Uudet
            uutiskirjeet lähetetään sähköpostiisi.
          </p>
        ) : null}
        {status === "error_invalid_email" ? (
          <p
            className={`${typography.variants.textBody} ${palette.text.secondary} text-center max-w-sm flex-1`}
          >
            ❌ Onkohan sähköpostisi kirjoitettu oikein? Tarkistatko vielä ja
            yritä sen jälkeen uudelleen
          </p>
        ) : null}
        {status === "success" ? (
          <p
            className={`${typography.variants.textBody} ${palette.text.secondary} text-center max-w-sm flex-1`}
          >
            ✅ Kiitos tilauksesta! Käy vielä hyväksymässä vahvistusviesti
            sähköpostistasi.
          </p>
        ) : null}
      </div>
    </div>
  );
};
