import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import markdownStyles from "./PostBody.module.css";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Element } from "react-markdown/lib";
import Image from "next/image";
import { Tweet } from "react-tweet";
import { Card } from "@/components/Card/Card";
import { GetNotifiedCard } from "@/components/GetNotifiedCard/GetNotifiedCard";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <section
      className={`${markdownStyles["markdown"]} mt-4`}
      // For react-tweet
      data-theme="light"
    >
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

            if (firstElement?.tagName === "bar") {
              const props = firstElement.properties as {
                value: string;
                label: string;
              };
              return (
                <figure className="p-4 sm:p-0">
                  <div className="border-2 border-solid border-primary text-white w-full max-w-article">
                    <div
                      className="font-primary bg-primary m-0 p-1 flex items-center justify-center"
                      style={{
                        width: `${props.value}%`,
                        animation: "fill-bar 2s",
                      }}
                    >
                      {props.value} %
                    </div>
                  </div>
                  <figcaption>{props.label}</figcaption>
                </figure>
              );
            }
            if (firstElement?.tagName === "infocard") {
              const props = firstElement.properties as {
                label: string;
              };
              // @ts-ignore
              const children = firstElement.children[0]?.value as string;
              return (
                <Card spacing="normal" label={`💡 ${props.label}`}>
                  {children}
                </Card>
              );
            }
            if (firstElement?.tagName === "getnotified") {
              return <GetNotifiedCard />;
            }

            if (firstElement?.tagName === "tweet") {
              const props = firstElement.properties as {
                id: string;
              };

              return <Tweet id={props.id} />;
            }

            return <p>{paragraph.children}</p>;
          },
          a: (link) => {
            const href = link.href as string;

            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {link.children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default PostBody;
