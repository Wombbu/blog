import { XMLHttpRequest } from "xmlhttprequest";

export function getHtmlSync(url: string, redirectLimit = 5): string {
  if (redirectLimit <= 0) {
    throw new Error("Too many redirects");
  }

  const xhr = new XMLHttpRequest();
  try {
    xhr.open("GET", url, false);
    xhr.send();
  } catch (err) {
    throw new Error("XMLHttpRequest(" + url + ") failed. " + err);
  }

  if (
    xhr.readyState === xhr.DONE &&
    (xhr.status === 301 ||
      xhr.status === 302 ||
      xhr.status === 303 ||
      xhr.status === 307 ||
      xhr.status === 308)
  ) {
    const redirectUrl = xhr.getResponseHeader("Location");
    // @ts-expect-error
    return getHtmlSync(redirectUrl, redirectLimit - 1);
  }

  if (xhr.status != 200) {
    const statusText = xhr.statusText ? xhr.statusText : "";
    throw new Error(
      "XMLHttpRequest(" + url + ") status:" + xhr.status + " " + statusText
    );
  }
  return xhr.responseText;
}
