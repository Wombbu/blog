import { Modal } from "@/components/Modal/Modal";
import { button } from "@/essentials/theme/button";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import SocialMediaShareLinkButtons from "@/features/social-media-sharing/components/SocialMediaShareLinkButtons";
import { BsLink45Deg } from "react-icons/bs";
export const SocialMediaShareModalView = ({
  slug,
  title,
  isOpen,
  onClose,
  onCopy,
  copied,
}: {
  slug: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onCopy: () => void;
  copied: boolean;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <h2 className={`${typography.variants.caption} mb-3 text-black`}>
        Kopioi linkki
      </h2>
      <div
        className={`flex gap-2 items-stretch bg-white border-2  mb-8 ${palette.border.primary}`}
      >
        <BsLink45Deg className="self-center ml-2 w-6 h-6 p-0" />
        <input
          type="email"
          disabled
          placeholder={`laurinevanpera.fi/posts/${slug}`}
          className="pr-2 min-w-0 flex-1 bg-transparent"
        />

        <button
          className={`${button.rectangular.primary.medium} whitespace-nowrap`}
          onClick={() => onCopy()}
        >
          {copied ? "✓ Kopioitu" : "Kopioi"}
        </button>
      </div>

      <h2 className={`${typography.variants.caption} mb-3 text-black`}>
        Tai jaa palveluun
      </h2>

      <div className="flex gap-2 flex-wrap">
        <SocialMediaShareLinkButtons slug={slug} title={title} />
      </div>
    </Modal>
  );
};
