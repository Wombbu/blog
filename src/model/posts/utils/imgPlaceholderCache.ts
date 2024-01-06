import Cache from "file-system-cache";

export const imgPlaceholderCache = Cache({
  basePath: "./.img-placeholder-cache",
  ttl: Infinity,
});
