import { createMapsUrl } from "@/components/MapsEmbed/createMapsUrl";
import { afterAll, beforeAll, expect, it, vi } from "vitest";

beforeAll(() => {
  vi.stubEnv("MAPS_API_KEY", "maps-api-key");
});

it("should create a street view url", () => {
  // Act
  const result = createMapsUrl({
    mapmode: "streetview",
    location: "12.34,56.78",
    heading: "90",
    pitch: "0",
    fov: "90",
  });

  // Assert
  expect(result).toMatchInlineSnapshot(
    `"https://www.google.com/maps/embed/v1/streetview?key=maps-api-key&location=12.34%2C56.78&heading=90&pitch=0&fov=90"`
  );
});

it("should create a place url", () => {
  // Act
  const result = createMapsUrl({
    mapmode: "place" as const,
    q: "Eiffel Tower",
  });

  // Assert
  expect(result).toMatchInlineSnapshot(
    `"https://www.google.com/maps/embed/v1/place?key=maps-api-key&q=Eiffel+Tower"`
  );
});

it("should create a directions url", () => {
  // Act
  const result = createMapsUrl({
    mapmode: "directions",
    origin: "Disneyland",
    destination: "Universal Studios",
    mode: "driving",
  });

  // Assert
  expect(result).toMatchInlineSnapshot(
    `"https://www.google.com/maps/embed/v1/directions?key=maps-api-key&origin=Disneyland&destination=Universal+Studios&mode=driving"`
  );
});

it("should create a search url", () => {
  // Act
  const result = createMapsUrl({
    mapmode: "search",
    q: "restaurants",
  });

  // Assert
  expect(result).toMatchInlineSnapshot(
    `"https://www.google.com/maps/embed/v1/search?key=maps-api-key&q=restaurants"`
  );
});

it("should create a view url", () => {
  // Act
  const result = createMapsUrl({
    mapmode: "view" as const,
    center: "12.34,56.78",
    zoom: "10",
  });

  // Assert
  expect(result).toMatchInlineSnapshot(
    `"https://www.google.com/maps/embed/v1/view?key=maps-api-key&center=12.34%2C56.78&zoom=10"`
  );
});

afterAll(() => {
  vi.unstubAllEnvs();
});
