import { OgData } from "@/model/posts/utils/markdown-it-plugins/linkPreviewPlugin/OgData";
import { JSDOM } from "jsdom";
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
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // title
    const titleSelector = doc.querySelector("title");
    const title = titleSelector != null ? titleSelector.textContent : undefined;
    const titleMetaSelector = doc.querySelector('meta[property="og:title"]');
    const titleMeta =
      // @ts-expect-error
      titleMetaSelector != null ? titleMetaSelector.content : undefined;

    ogData.title = titleMeta ? titleMeta : title;

    // description
    const descSelector = doc.querySelector('meta[name="description"]');
    // @ts-expect-error
    let desc = descSelector != null ? descSelector.content : undefined;
    const desc2Selector = doc.querySelector('meta[name="Description"]');
    // @ts-expect-error
    const desc2 = desc2Selector != null ? desc2Selector.content : undefined;
    desc = desc ? desc : desc2;
    const descMetaSelector = doc.querySelector(
      'meta[property="og:description"]'
    );
    const descMeta =
      // @ts-expect-error
      descMetaSelector != null ? descMetaSelector.content : undefined;
    ogData.description = descMeta ? descMeta : desc;

    // image
    const imageMetaSelector = doc.querySelector('meta[property="og:image"]');
    ogData.image =
      // @ts-expect-error
      imageMetaSelector != null ? imageMetaSelector.content : undefined;

    // site_name
    const siteMetaSelector = doc.querySelector('meta[property="og:site_name"]');
    ogData.site_name =
      // @ts-expect-error
      siteMetaSelector != null ? siteMetaSelector.content : undefined;

    // url
    const urlMetaSelector = doc.querySelector('meta[property="og:url"]');
    const urlMeta =
      // @ts-expect-error
      urlMetaSelector != null ? urlMetaSelector.content : undefined;
    ogData.url = urlMeta ? urlMeta : url;
  } catch (error) {
    console.log(error);
  }

  return ogData;
}
