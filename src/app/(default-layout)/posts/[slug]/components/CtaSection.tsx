import { FullWidthGray } from "@/components/FullWidthGray/FullWidthGray";
import { typography } from "@/essentials/theme/typography";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import dynamic from "next/dynamic";
import { palette } from "@/essentials/theme/palette";
import { Post } from "@/model/posts/types/Post";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazySocialMediaSharePost = dynamic(
  () =>
    import(
      "../../../../../features/social-media-sharing/components/SocialMediaSharePost"
    ),
  {
    loading: () => null,
    ssr: false,
  }
);

type Props = {
  post: Post;
};

export const CtaSection = ({ post }: Props) => {
  return (
    <FullWidthGray>
      <div className="flex flex-col items-stretch gap-6 max-w-article px-4 sm:px-0 m-auto">
        <div>
          <h1
            className={`${typography.variants.sectionTitle({
              noGutter: true,
            })} mb-1`}
          >
            Kiitos kun luit.
          </h1>
          <h2
            className={`${typography.variants.textBody} ${palette.text.secondary}`}
          >
            Jaa jos pidit. Pidä aihe keskustelussa.
          </h2>
        </div>
        <LazySocialMediaSharePost post={post} />
        <div>
          <h1
            className={`${typography.variants.sectionTitle({
              noGutter: true,
            })}  mb-1`}
          >
            Kiinnostuitko?
          </h1>
          <h2
            className={`${typography.variants.textBody} ${palette.text.secondary}`}
          >
            Kerron uusista artikkeleista Twitterissä, Threadsissa ja
            Instagramissa.
          </h2>
        </div>
        <SocialMediaLinks />
      </div>
    </FullWidthGray>
  );
};
