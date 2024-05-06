import MapsEmbed from "@/components/MapsEmbed/MapsEmbed.view";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "components/MapsEmbed",
  component: MapsEmbed,
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof MapsEmbed>;

type Story = StoryObj<typeof MapsEmbed>;

export const PlaceDefault: Story = {
  args: {
    mapmode: "place",
    q: "Ritakatu 11",
  },
};

export const DirectionsDefault: Story = {
  args: {
    mapmode: "directions",
    origin: "Tampere",
    destination: "Helsinki",
    mode: "bicycling",
  },
};

export const StreetViewDefault: Story = {
  args: {
    mapmode: "streetview",
    // Tampere
    location: "61.4984, 23.7609",
    fov: "90",
    heading: "90",
    pitch: "0",
  },
};

export const SearchDefault: Story = {
  args: {
    mapmode: "search",
    q: "Restaurants in Tampere",
  },
};

export const ViewDefault: Story = {
  args: {
    mapmode: "view",
    // Tampere
    center: "61.4984, 23.7609",
    maptype: "satellite",
    zoom: "18",
  },
};
