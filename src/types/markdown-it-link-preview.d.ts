declare module "markdown-it-link-preview" {
  import MarkdownIt from "markdown-it";
  export default function linkPreview(md: MarkdownIt): MarkdownIt;
}
