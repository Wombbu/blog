import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import markdownStyles from "./PostBody.module.css";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Element } from "react-markdown/lib";
import Image from "next/image";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <section className={`${markdownStyles["markdown"]} mt-4`}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          p: (paragraph) => {
            // @ts-ignore
            const firstElement: Element | undefined =
              paragraph.node?.children[0];
            if (firstElement?.tagName === "youtube") {
              const props = firstElement.properties as {
                videoid: string;
                caption: string;
              };

              return (
                <figure>
                  <div className="w-full m-auto max-w-article min-w-0">
                    <YouTubeEmbed
                      videoid={props.videoid}
                      params="loop=1&playsinline=1&mute=1&controls=1&showinfo=1&disablekb=1&fs=0&color=white&hl=fi&iv_load_policy=3"
                      style="max-width: 100%; height: auto;"
                    />
                  </div>
                  <figcaption>{props.caption}</figcaption>
                </figure>
              );
            }

            if (firstElement?.tagName === "img") {
              const image = firstElement.properties as {
                src: string;
                alt: string;
              };
              return (
                <figure>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={816}
                    width={612}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPYe+//1h//XeuOM2zbe+H/ixdiDAwMveVJGxsjVcR4GVx1+bwdNKQYGAC0sRB+mPDsEQAAAABJRU5ErkJggg=="
                  />
                  <figcaption>{image.alt}</figcaption>
                </figure>
              );
            }

            return <p>{paragraph.children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default PostBody;
