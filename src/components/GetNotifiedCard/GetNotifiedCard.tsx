import { Card } from "@/components/Card/Card";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";

export const GetNotifiedCard = () => {
  return (
    <Card spacing="normal" label="🔔 Tilaa uudet artikkelit puhelimeesi">
      <p className={`mb-6 ${typography.variants.textBody}`}>
        Liity whatsapp-yhteisöön. Saat uudet artikkelit suoraan puhelimeesi. Ei
        spämmiä, ei turhuuksia.
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
