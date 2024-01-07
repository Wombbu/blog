import { OgData } from "@/model/posts/utils/markdown-it-plugins/linkPreviewPlugin/OgData";
import { parse } from "node-html-parser";
import { getHtmlSync } from "./getHtmlSync";

export function getOgData(url: string) {
  let ogData: OgData = {
    title: "",
    description: "",
    image: "",
    site_name: "",
    url,
  };

  try {
    const html = getHtmlSync(url);
    const doc = parse(html);

    // title
    const titleSelector = doc.querySelector("title");
    const title = titleSelector != null ? titleSelector.textContent : undefined;
    const titleMeta = doc
      .querySelector('meta[property="og:title"]')
      ?.getAttribute("content");

    ogData.title = titleMeta || title || "";

    // description
    const desc = doc
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");
    const desc2 = doc
      .querySelector('meta[name="Description"]')
      ?.getAttribute("content");
    const descMeta = doc
      .querySelector('meta[property="og:description"]')
      ?.getAttribute("content");

    ogData.description = descMeta || desc || desc2 || "";

    // image
    const imageMeta = doc
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");
    ogData.image = imageMeta || "";

    // site_name
    const siteMeta = doc
      .querySelector('meta[property="og:site_name"]')
      ?.getAttribute("content");
    ogData.site_name = siteMeta || "";

    // url
    const urlMeta = doc
      .querySelector('meta[property="og:url"]')
      ?.getAttribute("content");
    ogData.url = urlMeta || url;

    return ogData;
  } catch (error) {
    console.log(error);
  }

  return ogData;
}
