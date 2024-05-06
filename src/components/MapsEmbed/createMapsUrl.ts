/**
 * Displays a map pin at a particular place or address, such as a landmark, business, geographic feature, or town.
 */
type PlaceOptions = {
  mapmode: "place";
  /** URL-escaped place name, address, plus code, or place ID. The Maps Embed API supports both + and %20 when escaping spaces. For example, convert "City Hall, New York, NY" to City+Hall,New+York,NY, or plus codes "849VCWC8+R9" to 849VCWC8%2BR9. */
  q: string;
  /** Accepts comma separated latitude and longitude values. */
  center?: string;
  /** Values ranging from 0 (the whole world) to 21 (individual buildings). The upper limit can vary depending on the map data available at the selected location. */
  zoom?: string;
  /** roadmap (default) or satellite */
  maptype?: "roadmap" | "satellite";
};

/**
 * Returns a map with no markers or directions
 */
type ViewOptions = {
  mapmode: "view";
  /** Accepts comma-separated latitude and longitude value; for example: 37.4218,-122.0840. */
  center: string;
  /** Values ranging from 0 (the whole world) to 21 (individual buildings). The upper limit can vary depending on the map data available at the selected location. */
  zoom?: string;
  /** roadmap (default) or satellite */
  maptype?: "roadmap" | "satellite";
};

/**
 * Displays the path between two or more specified points on the map, as well as the distance and travel time.
 */
type DirectionsOptions = {
  mapmode: "directions";
  /** URL-escaped place name, address, plus code, or place ID. The Maps Embed API supports both + and %20 when escaping spaces. For example, convert "City Hall, New York, NY" to City+Hall,New+York,NY, or plus codes "849VCWC8+R9" to 849VCWC8%2BR9. */
  origin: string;
  /** URL-escaped place name, address, plus code, or place ID. The Maps Embed API supports both + and %20 when escaping spaces. For example, convert "City Hall, New York, NY" to City+Hall,New+York,NY, or plus codes "849VCWC8+R9" to 849VCWC8%2BR9. */
  destination: string;
  /** driving, walking (which prefers pedestrian paths and sidewalks, where available), bicycling (which routes via bike paths and preferred streets where available), transit, or flying. */
  mode?: "driving" | "walking" | "bicycling" | "transit" | "flying";
  /** Accepts comma-separated latitude and longitude value; for example: 37.4218,-122.0840. */
  center?: string;
  /** Values ranging from 0 (the whole world) to 21 (individual buildings). The upper limit can vary depending on the map data available at the selected location. */
  zoom?: string;
  /** roadmap (default) or satellite */
  maptype?: "roadmap" | "satellite";
};

/**
 * Shows interactive panoramic views from designated locations.
 */
type StreetViewOptions = {
  mapmode: "streetview";
  /**
   * Accepts a latitude and a longitude as comma-separated values (46.414382,10.013988). The API will display the panorama photographed closest to this location.
   */
  location: string;
  /**
   * Indicates the compass heading of the camera in degrees clockwise from North.
   */
  heading: string;
  /**
   * Specifies the angle, up or down, of the camera. Positive values will angle the camera up, while negative values will angle the camera down. The default pitch of 0° is set based on on the position of the camera when the image was captured. Because of this, a pitch of 0° is often, but not always, horizontal. For example, an image taken on a hill will likely exhibit a default pitch that is not horizontal.
   */
  pitch: string;
  /**
   * Determines the horizontal field of view of the image. It defaults to 90°. When dealing with a fixed-size viewport the field of view is can be considered the zoom level, with smaller numbers indicating a higher level of zoom.
   */
  fov: string;
};

/**
 * Shows results for a search across the visible map region.
 */
type SearchOptions = {
  mapmode: "search";
  /** URL-escaped place name, address, plus code, or place ID. The Maps Embed API supports both + and %20 when escaping spaces. For example, convert "City Hall, New York, NY" to City+Hall,New+York,NY, or plus codes "849VCWC8+R9" to 849VCWC8%2BR9. */
  q: string;
  /** Accepts comma separated latitude and longitude values. */
  center?: string;
  /** Values ranging from 0 (the whole world) to 21 (individual buildings). The upper limit can vary depending on the map data available at the selected location. */
  zoom?: string;
  /** roadmap (default) or satellite */
  maptype?: "roadmap" | "satellite";
};

type Options =
  | PlaceOptions
  | ViewOptions
  | StreetViewOptions
  | DirectionsOptions
  | SearchOptions;

export const createMapsUrl = ({ mapmode, ...rest }: Options) => {
  return `https://www.google.com/maps/embed/v1/${mapmode}?key=${
    process.env.MAPS_API_KEY
  }&${new URLSearchParams(rest)}`;
};
