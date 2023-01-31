import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false, handlers: { code: (h, node) => node } })
    .process(markdown);
  return result.toString();
}
