import { Card } from "@/components/Card/Card";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";

export const GetNotifiedCard = () => {
  return (
    <Card label="Uudet artikkelit puhelimeesi" alignCenter>
      <p className={`mb-6 ${typography.variants.textBody}`}>
        Jos haluat kuulla uusista artikkeleista ensimmäisten joukossa, liity
        Whatsapp-yhteisöön 👇
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
        Liity yhteisöön
      </a>
    </Card>
  );
};
