import { NewsLetterDialog } from "@/model/subscribers/components/NewsLetterDialog/NewsLetterDialog.view";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { typography } from "@/essentials/theme/typography";
import SubscribeController from "@/model/subscribers/components/SubscribeInput/SubscribeInput.controller";
import Image from "next/image";
import profileImg from "../../../public/profiili.jpg";
import classNames from "classnames";
import { palette } from "@/essentials/theme/palette";
import SubscribeEmbed from "@/model/subscribers/components/SubscribeEmbed/SubscribeEmbed.controller";

export const Hero = () => (
  <section className="flex flex-col items-center">
    <Image
      src={profileImg}
      alt="Kuva minusta"
      width={600}
      height={600}
      className="object-cover sm:mb-0 w-full h-auto max-w-xl"
      loading="eager"
      placeholder="blur"
      priority={true}
    />
    <div
      className="flex-auto flex flex-col gap-2 items-center py-16"
      style={{ maxWidth: "425px" }}
    >
      <h1
        className={classNames(
          typography.variants.largeTitle,
          "!text-5xl sm:!text-6xl",
          `mb-2`
        )}
      >
        Moro.
      </h1>
      <p className={`${typography.variants.textBody} text-center mb-4`}>
        Vaikutan taloudellisesti vahvan ja asukkaalle pehmeän Tampereen
        puolesta.
        <br /> Nähdään kunnallisvaaleissa 2025!
      </p>
      <SocialMediaLinks />
      <SubscribeEmbed wrapperClassName="mt-12" />
    </div>
  </section>
);
