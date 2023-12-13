import MarkdownIt from "markdown-it";

/**
 * Markdown-it plugin. Creates a youtube embed
 *
 * Usage:
 * [@youtube](dsfajö434r3 Kulkijoita Hämeenkadulla)
 */
export function youtubeEmbedPlugin(md: MarkdownIt) {
  // @ts-ignore
  const defaultRender = md.renderer.rules.text.bind(md.renderer.rules);

  md.renderer.rules.text = (tokens, idx, _options, _env, self) => {
    const token = tokens[idx];
    const text = token.content.trim();
    const regex = /\[@youtube\]\((\S*)? (.*)?\)/;

    if (regex.test(text)) {
      const matches = text.match(regex);
      // @ts-ignore
      const videoId = matches[1];
      // @ts-ignore
      const caption = matches[2];

      // Create an animated data bar using inline CSS styles
      return `
      <figure>
<iframe width="560" height="auto" src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&loop=1&playsinline=1&mute=1&showinfo=0&controls=0&disablekb=1&fs=0&color=white&hl=fi&iv_load_policy=3&playlist=${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="max-width: 1422px; max-height: 790px;" ></iframe>
<figcaption>${caption}</figcaption>
</figure> 
      `;
    }

    // @ts-ignore
    return defaultRender(tokens, idx, _options, _env, self);
  };
}
