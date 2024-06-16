import { ApiEndpointDesc } from "@/model/ApiEndpointDesc";

export type ApiEndpointFile<
  Desc extends ApiEndpointDesc<any, any, any, any, any>
> = {} & (
  | Desc["request"]["queryParams"]
  | Desc["request"]["requestBody"] extends void
  ? {
      buildPath: () => string;
      fetcher: (path: string) => Promise<Desc["response"]["body"]>;
    }
  : Desc["request"]["queryParams"] extends void
  ? {
      buildPath: () => string;
      fetcher: (
        path: string,
        requestBody: Desc["request"]["requestBody"]
      ) => Promise<Desc["response"]["body"]>;
    }
  : {
      buildPath: (queryParams: Desc["request"]["queryParams"]) => string;
      fetcher: (path: string) => Promise<Desc["response"]["body"]>;
    });
