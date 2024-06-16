import { ApiEndpointDesc } from "@/model/ApiEndpointDesc";

export type SubscriberApi = {
  getCount: ApiEndpointDesc<
    "/subscribers/count",
    "GET",
    void,
    void,
    { count: number }
  >;
  postSubscriber: ApiEndpointDesc<
    "/subscribers",
    "POST",
    void,
    { email: string },
    { message: string }
  >;
};
