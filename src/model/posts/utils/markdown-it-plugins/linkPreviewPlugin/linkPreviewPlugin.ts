import { OgData } from "@/model/posts/utils/markdown-it-plugins/linkPreviewPlugin/OgData";
import MarkdownIt from "markdown-it";
import Token from "markdown-it/lib/token";
import { getOgData } from "./getOgData";
import Cache from "file-system-cache";

export const linkPreviewCache = Cache({
  basePath: "./.link-preview-cache",
  ttl: 60 * 60 * 24 * 7 * 30, // 30 days
});

const HTML_ESCAPE_REPLACE_RE = /[&<>"']/g;
const HTML_REPLACEMENTS: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

function replaceUnsafeChar(ch: string) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str: string) {
  return str?.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
}

function unescapeHtml(str: string) {
  return (
    str ||
    ""
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
  );
}

function linkPreviewHtml(ogData: OgData) {
  return (
    '<div class="link-preview-widget">' +
    "<a " +
    'href="' +
    escapeHtml(unescapeHtml(ogData.url)) +
    '" ' +
    'rel="noopener" ' +
    'target="_blank"' +
    ">" +
    '<div class="link-preview-widget-title">' +
    escapeHtml(unescapeHtml(ogData.title)) +
    "</div>" +
    '<div class="link-preview-widget-description">' +
    escapeHtml(unescapeHtml(ogData.description)) +
    "</div>" +
    '<div class="link-preview-widget-url">' +
    escapeHtml(unescapeHtml(ogData.site_name)) +
    "</div>" +
    "</a>" +
    "<a " +
    'class="link-preview-widget-image" ' +
    'href="' +
    escapeHtml(unescapeHtml(ogData.url)) +
    '" ' +
    'rel="noopener" ' +
    "style=\"background-image: url('" +
    escapeHtml(unescapeHtml(ogData.image)) +
    "');\" " +
    'target="_blank"' +
    "></a>" +
    "</div>"
  );
}

export function linkPreviewPlugin(md: MarkdownIt, options: MarkdownIt.Options) {
  // Remember old renderer, if overriden, or proxy to default renderer
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  function isLinkPreview(tokens: Token[], idx: number) {
    const t = tokens[idx + 1];
    if (t.type === "text" && t.content === "@preview") {
      return true;
    } else {
      return false;
    }
  }

  function hideTokensUntilLinkClose(tokens: Token[], idx: number) {
    tokens[idx + 1].content = ""; // hidden ???
    for (let i = idx + 1; i < tokens.length; i++) {
      tokens[i].hidden = true;
      if (tokens[i].type === "link_close") break;
    }
  }

  function getHref(tokens: Token[], idx: number) {
    const hrefIdx = tokens[idx].attrIndex("href");
    // if (hrefIdx < 0) error;
    // @ts-ignore
    return tokens[idx].attrs[hrefIdx][1];
  }

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    if (isLinkPreview(tokens, idx)) {
      hideTokensUntilLinkClose(tokens, idx);
      const url = getHref(tokens, idx);

      let ogData: OgData = {
        title: "",
        description: "",
        image: "",
        site_name: "",
        url,
      };

      const cacheHit = linkPreviewCache.getSync(url);

      if (cacheHit) {
        ogData = {
          title: "",
          description: "",
          image: "",
          site_name: "",
          url,
          ...cacheHit,
        };
      } else {
        ogData = getOgData(url);
        linkPreviewCache.setSync(url, ogData);
      }

      return linkPreviewHtml(ogData!);
    } else {
      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self);
    }
  };
}
