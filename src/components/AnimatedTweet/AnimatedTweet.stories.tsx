import AnimatedTweet from "@/components/AnimatedTweet/AnimatedTweet";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "components/AnimatedTweet",
  component: AnimatedTweet,
} as Meta<typeof AnimatedTweet>;

type Story = StoryObj<typeof AnimatedTweet>;

export const Default: Story = {
  args: {
    text: "Hello world.",
  },
};

export const WithImage: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/600x300",
    text: "Hello world.",
  },
};
