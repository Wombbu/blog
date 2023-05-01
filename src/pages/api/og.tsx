import { NextRequest, ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(new URL("public/WorkSans-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const imgPath = searchParams.get("imgPath");
  const title = searchParams.get("title");
  const readingTime = searchParams.get("readingTime");
  const fontData = await font;

  const domain = req.nextUrl.origin;

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
        {/* eslint-disable-next-line */}
        <img
          width="1200"
          height="627"
          src={`${domain}${imgPath}`}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
        {title ? (
          <div
            tw="text-white font-bold p-8 bg-black flex flex-col items-stretch mx-8"
            style={{ fontFamily: "WorkSans_Bold" }}
          >
            <div tw="text-2xl mb-1">Lauri Nevanperä</div>
            <div tw="text-5xl">{title}</div>
            <div tw="text-2xl mt-1 text-right self-end">
              {readingTime + " min lukuaika"}
            </div>
          </div>
        ) : null}
        {title ? null : (
          <div
            tw="absolute right-0 bottom-0 text-white font-bold p-6 bg-black flex flex-col m-8 text-3xl"
            style={{ fontFamily: "WorkSans_Bold" }}
          >
            <div>{readingTime + " min lukuaika"}</div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 627,
      fonts: [
        {
          name: "WorkSans_Bold",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
