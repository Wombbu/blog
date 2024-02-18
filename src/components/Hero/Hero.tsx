import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";
import profileImg from "../../../public/profiili.jpg";

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
        className={`font-primary font-bold text-5xl sm:text-6xl text-black text-center mb-2`}
      >
        Moro.
      </h1>
      <p className={`${typography.variants.textBody} text-center mb-4`}>
        Vaikutan taloudellisesti vahvojen ja asukkaille pehmeiden kaupunkien
        puolesta. Leipätyökseni olen ohjelmistoarkkitehti Tampereella.
      </p>
      <SocialMediaLinks />
    </div>
  </section>
);
