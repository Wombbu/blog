import { button } from "@/essentials/theme/button";
import { StoryObj, Meta } from "@storybook/react";
import { MdInfoOutline } from "react-icons/md";

const Button = (props: React.ComponentProps<"button">) => <button {...props} />;

export default {
  title: "essentials/theme/button",
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const RoundedPrimarySmall: Story = {
  args: {
    children: "Rounded primary small",
    className: button.rounded.primary.small,
  },
};

export const RoundedPrimarySmallLoading: Story = {
  args: {
    children: "Rounded primary small",
    className: button.rounded.primary.small,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RoundedPrimarySmallIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rounded primary small
      </>
    ),
    className: button.rounded.primary.small,
  },
};

export const RoundedPrimaryMedium: Story = {
  args: {
    children: "Rounded primary medium",
    className: button.rounded.primary.medium,
  },
};

export const RoundedPrimaryMediumLoading: Story = {
  args: {
    children: "Rounded primary medium",
    className: button.rounded.primary.medium,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RoundedPrimaryMediumIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rounded primary large
      </>
    ),
    className: button.rounded.primary.medium,
  },
};

export const RoundedPrimaryLarge: Story = {
  args: {
    children: "Rounded primary large",
    className: button.rounded.primary.large,
  },
};

export const RoundedPrimaryLargeLoading: Story = {
  args: {
    children: "Rounded primary large",
    className: button.rounded.primary.large,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RoundedPrimaryLargeIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rounded primary large
      </>
    ),
    className: button.rounded.primary.large,
  },
};

export const RoundedSecondarySmall: Story = {
  args: {
    children: "Rounded secondary small",
    className: button.rounded.secondary.small,
  },
};

export const RoundedSecondarySmallLoading: Story = {
  args: {
    children: "Rounded secondary small",
    className: button.rounded.secondary.small,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RoundedSecondarySmallIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rounded secondary small
      </>
    ),
    className: button.rounded.secondary.small,
  },
};

export const RoundedSecondaryMedium: Story = {
  args: {
    children: "Rounded secondary medium",
    className: button.rounded.secondary.medium,
  },
};

export const RoundedSecondaryMediumLoading: Story = {
  args: {
    children: "Rounded secondary medium",
    className: button.rounded.secondary.medium,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RoundedSecondaryMediumIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rounded secondary medium
      </>
    ),
    className: button.rounded.secondary.medium,
  },
};

export const RoundedSecondaryLarge: Story = {
  args: {
    children: "Rounded secondary large",
    className: button.rounded.secondary.large,
  },
};

export const RoundedSecondaryLargeLoading: Story = {
  args: {
    children: "Rounded secondary large",
    className: button.rounded.secondary.large,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RoundedSecondaryLargeIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rounded secondary large
      </>
    ),
    className: button.rounded.secondary.large,
  },
};

export const RectangularPrimarySmall: Story = {
  args: {
    children: "Rectangular primary small",
    className: button.rectangular.primary.small,
  },
};

export const RectangularPrimarySmallLoading: Story = {
  args: {
    children: "Rectangular primary small",
    className: button.rectangular.primary.small,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RectangularPrimarySmallIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rectangular primary small
      </>
    ),
    className: button.rectangular.primary.small,
  },
};

export const RectangularPrimaryMedium: Story = {
  args: {
    children: "Rectangular primary medium",
    className: button.rectangular.primary.medium,
  },
};

export const RectangularPrimaryMediumLoading: Story = {
  args: {
    children: "Rectangular primary medium",
    className: button.rectangular.primary.medium,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RectangularPrimaryMediumIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rectangular primary medium
      </>
    ),
    className: button.rectangular.primary.medium,
  },
};

export const RectangularPrimaryLarge: Story = {
  args: {
    children: "Rectangular primary large",
    className: button.rectangular.primary.large,
  },
};

export const RectangularPrimaryLargeLoading: Story = {
  args: {
    children: "Rectangular primary large",
    className: button.rectangular.primary.large,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RectangularPrimaryLargeIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rectangular primary large
      </>
    ),
    className: button.rectangular.primary.large,
  },
};

export const RectangularSecondarySmall: Story = {
  args: {
    children: "Rectangular secondary small",
    className: button.rectangular.secondary.small,
  },
};

export const RectangularSecondarySmallLoading: Story = {
  args: {
    children: "Rectangular secondary small",
    className: button.rectangular.secondary.small,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RectangularSecondarySmallIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rectangular secondary small
      </>
    ),
    className: button.rectangular.secondary.small,
  },
};

export const RectangularSecondaryMedium: Story = {
  args: {
    children: "Rectangular secondary medium",
    className: button.rectangular.secondary.medium,
  },
};

export const RectangularSecondaryMediumLoading: Story = {
  args: {
    children: "Rectangular secondary medium",
    className: button.rectangular.secondary.medium,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RectangularSecondaryMediumIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rectangular secondary medium
      </>
    ),
    className: button.rectangular.secondary.medium,
  },
};

export const RectangularSecondaryLarge: Story = {
  args: {
    children: "Rectangular secondary large",
    className: button.rectangular.secondary.large,
  },
};

export const RectangularSecondaryLargeLoading: Story = {
  args: {
    children: "Rectangular secondary large",
    className: button.rectangular.secondary.large,
    // @ts-ignore
    "data-loading": true,
  },
};

export const RectangularSecondaryLargeIcon: Story = {
  args: {
    children: (
      <>
        <MdInfoOutline /> Rectangular secondary large
      </>
    ),
    className: button.rectangular.secondary.large,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Primary disabled",
    className: button.rectangular.primary.medium,
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Secondary disabled",
    className: button.rectangular.secondary.medium,
    disabled: true,
  },
};

export const IconButtonRoundedSmall: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rounded.small,
  },
};

export const IconButtonRoundedMedium: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rounded.medium,
  },
};

export const IconButtonRoundedLarge: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rounded.large,
  },
};

export const IconButtonRectangularSmall: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rectangular.small,
  },
};

export const IconButtonRectangularMedium: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rectangular.medium,
  },
};

export const IconButtonRectangularLarge: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rectangular.large,
  },
};

export const IconButtonRoundedDisabled: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rounded.medium,
    disabled: true,
  },
};

export const IconButtonRectangularDisabled: Story = {
  args: {
    children: <MdInfoOutline />,
    className: button.iconButton.rectangular.medium,
    disabled: true,
  },
};
