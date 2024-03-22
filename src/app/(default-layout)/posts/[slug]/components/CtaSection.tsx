import { FullWidthGray } from "@/components/FullWidthGray/FullWidthGray";
import { typography } from "@/essentials/theme/typography";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import dynamic from "next/dynamic";
import { palette } from "@/essentials/theme/palette";
import { Post } from "@/model/posts/types/Post";
import { button } from "@/essentials/theme/button";
import Image from "next/image";
import { ShareButtonGeneric } from "@/features/social-media-sharing/components/ShareButtonGeneric";
import ShareViaModal from "@/features/social-media-sharing/components/ShareViaModal.controller";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazySocialMediaSharePost = dynamic(
  () => import("../../../../../components/AnimatedTweet/AnimatedTweet"),
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
        <h1
          className={`${typography.variants.sectionTitle({
            noGutter: true,
          })}`}
        >
          Kiitos kun luit.
        </h1>
        <ShareViaModal slug={post.slug} title={post.title} />
        <h1
          className={`${typography.variants.sectionTitle({
            noGutter: true,
          })} text-center mt-6`}
        >
          Tilaa artikkelit puhelimeesi
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
        <h1
          className={`${typography.variants.sectionTitle({
            noGutter: true,
          })} text-center mt-6`}
        >
          Seuraa somessa
        </h1>
        <SocialMediaLinks />
      </div>
    </FullWidthGray>
  );
};
