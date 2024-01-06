import MarkdownIt from "markdown-it";
import iterator from "markdown-it-for-inline";
// @ts-expect-error
import implicitFigures from "markdown-it-image-figures";
import { dataBarPlugin } from "@/model/posts/utils/markdown-it-plugins/dataBarPlugin";
import { youtubeEmbedPlugin } from "@/model/posts/utils/markdown-it-plugins/youtubeEmbedPlugin";
import { linkPreviewPlugin } from "@/model/posts/utils/markdown-it-plugins/linkPreviewPlugin/linkPreviewPlugin";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})
  // add target="_blank" to all links
  .use(iterator, "url_new_win", "link_open", function (tokens: any, idx: any) {
    const aIndex = tokens[idx].attrIndex("target");

    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]);
    } else {
      tokens[idx].attrs[aIndex][1] = "_blank";
    }
  })
  .use(linkPreviewPlugin)
  .use(dataBarPlugin)
  .use(youtubeEmbedPlugin)
  .use(implicitFigures, {
    figcaption: "alt",
    lazy: true,
    async: true,
  });

export default function markdownToHtml(markdown: string) {
  const result = md.render(markdown);
  return result.toString();
}
