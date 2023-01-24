import Image from "next/image";

export const Hero = () => (
  <section className="flex items-center justify-center flex-col sm:flex-row py-8 sm:py-16 mb-3 sm:mb-6 flex-1 ">
    <Image
      src="/lauri.jpg"
      alt="Image of me"
      width={160}
      height={160}
      className=" border-2 border-gray-800 mr-8 rounded-full mb-8 sm:mb-0"
    />
    <div className="flex-auto" style={{ maxWidth: "425px" }}>
      <h1 className="font-primary font-bold text-4xl sm:text-6xl mb-2 text-gray-800">
        Moro!
      </h1>
      <p className="font-primary text-md font-medium text-gray-700">
        Olen Tampereelta, kirjoitan kaupunkikehityksestä. Kehitän kiinteistöalan
        toiminnanohjausjärjestelmää käyttöliittymäohjelmistoarkkitehtina.
      </p>
    </div>
  </section>
);
