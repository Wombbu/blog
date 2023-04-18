declare module "markdown-it-for-inline" {
  import MarkdownIt from "markdown-it";
  export default function linkPreview(md: MarkdownIt): MarkdownIt;
}
