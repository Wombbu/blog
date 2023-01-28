import Image from "next/image";

export const Hero = () => (
  <section className="flex items-center justify-center flex-col sm:flex-row py-8 sm:py-16 mb-3 sm:mb-8 flex-1 ">
    <Image
      src="/lauri.jpg"
      alt="Image of me"
      width={256}
      height={256}
      className="shadow-outline object-cover mr-8 rounded-full mb-8 sm:mb-0 h-52 w-52"
    />
    <div className="flex-auto" style={{ maxWidth: "425px" }}>
      <h1 className="font-primary font-bold text-4xl sm:text-6xl mb-2 text-gray-800">
        Moro.
      </h1>
      <p className="font-primary text-md font-medium text-gray-600">
        Olen Tampereelta, kirjoitan kaupunkikehityksestä. Kehitän kiinteistöalan
        toiminnanohjausjärjestelmää johtavana
        käyttöliittymäohjelmistokehittäjänä.
      </p>
    </div>
  </section>
);
