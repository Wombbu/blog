import { api } from "@/model/api";
import { ApiEndpointFile } from "@/model/ApiEndpointFile";
import { SubscriberApi } from "@/model/subscribers/SubscriberApi";
import useSWRMutation from "swr/mutation";

type ApiDesc = SubscriberApi["postSubscriber"];

export const subscribersPost: ApiEndpointFile<ApiDesc> = {
  buildPath: () => "/subscribers",
  fetcher: (path, requestBody) => api.url(path).post(requestBody).json(),
};

export const usePostSubscriber = () =>
  useSWRMutation(
    subscribersPost.buildPath(),
    (url, options: { arg: ApiDesc["request"]["requestBody"] }) =>
      subscribersPost.fetcher(url, options.arg),
    {
      throwOnError: false,
    }
  );
