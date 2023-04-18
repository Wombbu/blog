import MarkdownIt from "markdown-it";
import linkPreview from "markdown-it-link-preview";
import iterator from "markdown-it-for-inline";

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
  .use(linkPreview);

export default function markdownToHtml(markdown: string) {
  const result = md.render(markdown);
  return result.toString();
}
