export type ApiEndpointDesc<
  Path extends string,
  Method,
  QueryParams,
  RequestParams,
  Response
> = {
  path: Path;
  method: Method;
  request: {
    queryParams: QueryParams;
    requestBody: RequestParams;
  };
  response: {
    body: Response;
  };
};
