export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>{`Artikkelit - Lauri Nevanperä`}</title>
      <meta
        name="description"
        content="Taloudellisesti vahvojen ja asukkaille pehmeiden kaupunkien puolesta"
      />
      <meta name="og:title" content="Artikkelit - Lauri Nevanperä" />
      <meta
        name="og:description"
        content="Taloudellisesti vahvojen ja asukkaille pehmeiden kaupunkien puolesta"
      />
    </>
  );
}
