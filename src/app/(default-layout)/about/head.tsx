export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>{`Minusta - Lauri Nevanperä`}</title>
      <meta
        name="description"
        content="Taloudellisesti vahvojen ja asukkaille pehmeiden kaupunkien puolesta"
      />
      <meta name="og:title" content="Minusta - Lauri Nevanperä" />
      <meta
        name="og:description"
        content="Taloudellisesti vahvojen ja asukkaille pehmeiden kaupunkien puolesta"
      />
      <meta name="og:image" content="https://laurinevanpera.fi/profiili.jpg" />
    </>
  );
}
