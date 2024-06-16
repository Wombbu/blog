import { api } from "@/model/api";
import { ApiEndpointFile } from "@/model/ApiEndpointFile";
import { SubscriberApi } from "@/model/subscribers/SubscriberApi";
import useSWR from "swr";

type ApiDesc = SubscriberApi["getCount"];

export const subscriberCountGet: ApiEndpointFile<ApiDesc> = {
  buildPath: () => "/subscribers/count",
  fetcher: (path) => api.url(path).get().json(),
};

export const useGetSubscriberCount = () =>
  useSWR(subscriberCountGet.buildPath(), subscriberCountGet.fetcher);
