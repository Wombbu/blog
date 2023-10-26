import MarkdownIt from "markdown-it";
import linkPreview from "markdown-it-link-preview";
import iterator from "markdown-it-for-inline";
// @ts-expect-error
import implicitFigures from "markdown-it-image-figures";

function dataBarPlugin(md: MarkdownIt) {
  // @ts-ignore
  const defaultRender = md.renderer.rules.text.bind(md.renderer.rules);

  md.renderer.rules.text = (tokens, idx, _options, _env, self) => {
    const token = tokens[idx];
    const text = token.content.trim();
    const regex = /@graph\[(\d{1,3})\s+([^\]]+)\]/;

    if (regex.test(text)) {
      const matches = text.match(regex);
      // @ts-ignore
      const dataValue = parseInt(matches[1]);
      // @ts-ignore
      const title = matches[2];

      // Ensure dataValue is within the valid range (0 to 100)
      const value = Math.min(100, Math.max(0, dataValue));

      // Create an animated data bar using inline CSS styles
      return `
      <figure style="display: flex; flex-direction: column; align-items: stretch; max-width: 378px; position: initial; width: auto; /*To prevent figure css from widening this*/">
        <div style="border: 2px solid black; color: white;">
          <div style="font-family: sans-serif; width: ${value}%; background-color: #000; margin: 0; padding: 0; animation: fill-bar 2s; padding: 4px; display: flex; align-items: center; justify-content: center;">
            ${value} %
          </div>
        </div>
        <figcaption style="">${title}</figcaption>
      </figure>
      `;
    }

    // @ts-ignore
    return defaultRender(tokens, idx, _options, _env, self);
  };
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})
  .use(iterator, "url_new_win", "link_open", function (tokens: any, idx: any) {
    var aIndex = tokens[idx].attrIndex("target");

    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]);
    } else {
      tokens[idx].attrs[aIndex][1] = "_blank";
    }
  })
  .use(linkPreview)
  .use(dataBarPlugin)
  .use(implicitFigures, {
    figcaption: "alt",
    lazy: true,
    async: true,
  });

export default function markdownToHtml(markdown: string) {
  const result = md.render(markdown);
  return result.toString();
}
