import AnimatedTweet from "@/components/AnimatedTweet/AnimatedTweet.view";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "components/AnimatedTweet",
  component: AnimatedTweet,
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof AnimatedTweet>;

type Story = StoryObj<typeof AnimatedTweet>;

export const Default: Story = {
  args: {
    text: "Polkupyöräilijöiden ohjaaminen autoliikenteen sekaan kuulostaa ideologisesti houkuttelevalta vaihtoehdolta,| mutta onneksi turvallisuus ja järjestys asetettiin tässä tapauksessa etusijalle.",
  },
};

export const WithImage: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/600x300",
    text: "Polkupyöräilijöiden ohjaaminen autoliikenteen sekaan kuulostaa ideologisesti houkuttelevalta vaihtoehdolta,| mutta onneksi turvallisuus ja järjestys asetettiin tässä tapauksessa etusijalle.",
  },
};

export const StartsWritingTextWhenOnViewport: Story = {
  args: {
    text: "Polkupyöräilijöiden ohjaaminen autoliikenteen sekaan kuulostaa ideologisesti houkuttelevalta vaihtoehdolta,| mutta onneksi turvallisuus ja järjestys asetettiin tässä tapauksessa etusijalle.",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "110vh", display: "flex", alignItems: "flex-end" }}>
        <Story />
      </div>
    ),
  ],
};
