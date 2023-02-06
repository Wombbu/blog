import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const imgPath = searchParams.get("imgPath");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          width="1200"
          height="627"
          src={`http:localhost:3000/${imgPath}`}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
        <p tw="text-5xl text-white font-bold font-primary p-8 bg-gray-900">
          Kaupunkisuunnittelu on ideologista
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
