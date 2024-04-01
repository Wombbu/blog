import Question from "@/components/Question/Question.view";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "components/Question",
  component: Question,
  decorators: [
    (Story) => (
      <div style={{ width: "612 px", margin: "auto" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Question>;

type Story = StoryObj<typeof Question>;

export const Default: Story = {
  args: {
    title: "Aamulehdestä vai poliittisesta Twitteristä?",
    options: ["Aamulehti", "Poliittinen Twitter"],
    answerIndex: 0,
    answerDesc: "Toden totta. Tämäkin on Aamulehden pääkirjoituksesta.",
  },
};
