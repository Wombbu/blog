import Image from "next/image";

export const Hero = () => (
  <section className="flex items-center justify-center py-8">
    <div className="max-w-screen-lg flex justify-center items-center m-3 flex-1">
      <Image
        src="/lauri.jpg"
        alt="Image of me"
        width={160}
        height={160}
        className=" border-2 border-gray-800 mr-8 rounded-full"
      />
      <div className="flex-auto" style={{ maxWidth: "425px" }}>
        <h1 className="font-primary font-bold text-6xl mb-2 text-black">
          Moro!
        </h1>
        <p className="font-primary text-md font-medium text-gray-900">
          Olen Tampereelta, kirjoitan kaupunkikehityksestä. Kehitän
          kiinteistöalan toiminnanohjausjärjestelmää
          käyttöliittymäohjelmistoarkkitehtina.
        </p>
      </div>
    </div>
  </section>
);
