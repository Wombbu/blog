import { NewsLetterDialog } from "@/model/subscribers/components/NewsLetterDialog/NewsLetterDialog.view";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "model/subscribers/NewsLetterDialog",
  component: NewsLetterDialog,
} as Meta;

type Story = StoryObj<typeof NewsLetterDialog>;

export const InfoButton: Story = {
  args: {
    variant: "info_button",
  },
};

export const RoundedCtaButton: Story = {
  args: {
    variant: "rounded_cta_button",
  },
};
