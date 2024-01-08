import Cache from "file-system-cache";

export const imgPlaceholderCache = Cache({
  basePath: "./.img-placeholder-cache",
  ttl: 60 * 60 * 24 * 7 * 30, // 30 days
});
