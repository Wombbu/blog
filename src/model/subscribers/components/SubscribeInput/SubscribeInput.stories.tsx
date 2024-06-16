import { SubscribePlaceholder } from "@/model/subscribers/components/SubscribeEmbed/SubscribeEmbed.placeholder.view";
import { SubscribeInput } from "@/model/subscribers/components/SubscribeInput/SubscribeInput.view";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "components/SubscribeInput",
  component: SubscribeInput,
} as Meta<typeof SubscribeInput>;

type Story = StoryObj<typeof SubscribeInput>;

export const Idle: Story = {
  args: {
    onApply: () => {},
    status: "idle",
  },
};

export const Loading: Story = {
  args: {
    onApply: () => {},
    status: "loading",
  },
};

export const Success: Story = {
  args: {
    onApply: () => {},
    status: "success",
  },
};

export const Error: Story = {
  args: {
    onApply: () => {},
    status: "error_generic",
  },
};

export const InvalidEmail: Story = {
  args: {
    onApply: () => {},
    status: "error_invalid_email",
  },
};

export const AlreadySubscribed: Story = {
  args: {
    onApply: () => {},
    status: "already_subscribed",
  },
};

export const RateLimit: Story = {
  args: {
    onApply: () => {},
    status: "error_rate_limit",
  },
};

export const Placeholder = () => <SubscribePlaceholder />;
