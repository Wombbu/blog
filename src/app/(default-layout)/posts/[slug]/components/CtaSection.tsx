import { FullWidthGray } from "@/components/FullWidthGray/FullWidthGray";
import { typography } from "@/essentials/theme/typography";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import dynamic from "next/dynamic";
import { palette } from "@/essentials/theme/palette";
import { Post } from "@/model/posts/types/Post";
import { button } from "@/essentials/theme/button";
import Image from "next/image";

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
      <div className="flex flex-1 flex-col items-center gap-4 max-w-article m-auto">
        <div>
          <h1
            className={`${typography.variants.sectionTitle({
              noGutter: true,
            })}`}
          >
            Kiitos kun luit.
          </h1>
        </div>
        <LazySocialMediaSharePost post={post} />
        <h1
          className={`${typography.variants.sectionTitle({
            noGutter: true,
          })} text-center mt-6`}
        >
          🔔 Tilaa artikkelit puhelimeesi
        </h1>
        <a
          href="https://chat.whatsapp.com/EiQjzdPh1qq6AOt7nnj2vG"
          className={`${button.variants.rounded}`}
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp-logo"
            width={22}
            height={22}
            className={`mr-2`}
          />{" "}
          Tilaa ilmoitukset
        </a>
        <h2
          className={`${typography.variants.textBody} ${palette.text.secondary} text-center`}
        >
          Kerron uusista artikkeleista myös Twitterissä, Threadsissa ja
          Instagramissa.
        </h2>
        <SocialMediaLinks />
      </div>
    </FullWidthGray>
  );
};
