import { Card } from "@/components/Card/Card";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";

export const GetNotifiedCard = () => {
  return (
    <Card spacing="normal" label="🔔 Saa ilmoitus uusista artikkeleista">
      <p className={`mb-6 ${typography.variants.textBody}`}>
        Liity whatsapp-yhteisöön. Saat uudet artikkelit suoraan puhelimeesi.
      </p>
      <a
        href="https://chat.whatsapp.com/EiQjzdPh1qq6AOt7nnj2vG"
        className={`${button.variants.rounded} w-full sm:w-auto`}
      >
        <Image
          src="/whatsapp.svg"
          alt="whatsapp-logo"
          width={22}
          height={22}
          className={`mr-2`}
        />{" "}
        Tilaa ilmoitukset
      </a>
    </Card>
  );
};
