export const buildOgImageUrl = ({
  title,
  imageUrl,
  readingTime,
}: {
  title: string;
  imageUrl: string;
  readingTime: string;
}) =>
  `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.laurinevanpera.fi"
  }/api/og?imgPath=${imageUrl}&readingTime=${readingTime}&title=${title}`;
