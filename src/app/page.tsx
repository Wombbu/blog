import { Header } from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-80 bg-emerald-800 flex items-center justify-center">
        <div className="max-w-screen-lg flex justify-center items-center m-3 flex-1">
          <Image
            src="/lauri.jpg"
            alt="Image of me"
            width={160}
            height={160}
            className="drop-shadow-lg border-2 border-emerald-900 mr-8 rounded-full"
          />
          <div className="flex-auto" style={{ maxWidth: "425px" }}>
            <h1 className="font-primary font-bold text-6xl mb-2 text-gray-200">
              Moro!
            </h1>
            <p className="font-primary text-md font-medium text-gray-200">
              Olen Tampereelta ja kirjoitan kaupunkisuunnittelusta. Kehitän
              kiinteistöalan toiminnanohjausjärjestelmää
              käyttöliittymäohjelmistoarkkitehtina.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
