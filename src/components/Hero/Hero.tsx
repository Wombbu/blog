import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import Image from "next/image";

export const Hero = () => (
  <section className="flex flex-col items-center">
    <Image
      src="/profiili.jpg"
      alt="Image of me"
      width={960}
      height={960}
      className="object-cover sm:mb-0 w-full h-auto"
      loading="eager"
    />
    <div
      className="flex-auto flex flex-col gap-2 items-center py-16"
      style={{ maxWidth: "425px" }}
    >
      <h1 className="font-primary font-bold text-5xl sm:text-6xl text-gray-800 text-center mb-2">
        Moro.
      </h1>
      <p className="font-primary text-md font-medium text-center mb-4">
        Otan kantaa kaupunkikehitykseen. Leipätyökseni kehitän kiinteistöalan
        toiminnanohjausjärjestelmää ohjelmistoarkkitehtina Tampereella.
      </p>
      <SocialMediaLinks />
    </div>
  </section>
);
