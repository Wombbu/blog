const fs = require("fs");
const matter = require("gray-matter");
const fsWalk = require("@nodelib/fs.walk");
const TwitterApi = require("twitter-api-v2").TwitterApi;

const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const postToTwitter = async (postUrl, twitterComment) => {
  const twitterClient = new TwitterApi({
    accessToken: process.env.TWITTER_CONSUMER_KEY,
    accessSecret: process.env.TWITTER_CONSUMER_SECRET,
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
  });
  const tweetText = `${twitterComment}\n${postUrl}`;
  const createdTweet = await twitterClient.v1.tweet(tweetText);
  return `https://twitter.com/${createdTweet.user.screen_name}/status/${createdTweet.id_str}`;
};

const addTwitterLink = async () => {
  const markdownFiles = fsWalk.walkSync("blog", {
    entryFilter: (entry) => entry.name.endsWith(".md"),
  });
  const blogPostsToTweet = markdownFiles
    .map((markdownFile) => matter.read(markdownFile.path))
    .filter((fileData) => {
      return !fileData.data.twitterLink;
    });
  if (blogPostsToTweet.length > 0) {
    // Sleep for 30 seconds, to give GitHub Pages a chance to have updated
    await sleep(30 * 1000);

    for (const blogPostToTweet of blogPostsToTweet) {
      const postPath = blogPostToTweet.path.replace("/index.md", "/");
      const postUrl = `https://www.frankbille.dk/${postPath}`;
      const tweetText =
        blogPostToTweet.data.twitterComment ||
        blogPostToTweet.data.excerpt ||
        blogPostToTweet.data.title;
      const tweetUrl = await postToTwitter(postUrl, tweetText);
      blogPostToTweet.data.twitterLink = tweetUrl;
      fs.writeFileSync(
        blogPostToTweet.path,
        matter.stringify(blogPostToTweet.content, blogPostToTweet.data)
      );
    }
  }
};

addTwitterLink()
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
