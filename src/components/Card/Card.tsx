import Image from "next/image";
import Link from "next/link";

export const Card = () => (
  <Link href="/" className="flex flex-col">
    <Image
      src="/temp.jpg"
      alt="Image of tampere"
      width={600}
      height={600}
      className="object-cover mb-5 w-full"
      style={{
        aspectRatio: "3/4",
      }}
    />

    <h5 className="font-primary font-medium text-gray-600 text-xl mb-4">
      5. joulukuuta 2022 - 5 min lukuaika
    </h5>
    <h4 className="font-primary font-medium text-black text-2xl mb-4">
      60-luku oli villiä aikaa kaupunkisuunnittelussa
    </h4>
  </Link>
);
