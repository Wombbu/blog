import wretch, { WretchErrorCallback } from "wretch";

export class ApiError extends Error {
  status: number;

  constructor({ message, status }: { message: string; status: number }) {
    super(message);
    this.status = status;
  }
}

const errorMapper: WretchErrorCallback<any, any, any> = (err, request) => {
  let responseJSON = null;

  try {
    responseJSON = JSON.parse(err.message);
  } catch (e) {
    console.error("Error response body JSON parsing failed");
  }

  throw new ApiError({
    message: responseJSON?.message || err.message,
    status: err.status,
  });
};

export const api = wretch("/api")
  .errorType("json")
  .catcher(400, errorMapper)
  .catcher(401, errorMapper)
  .catcher(403, errorMapper)
  .catcher(404, errorMapper)
  .catcher(405, errorMapper)
  .catcher(410, errorMapper)
  .catcher(415, errorMapper)
  .catcher(422, errorMapper)
  .catcher(429, errorMapper)
  .catcher(500, errorMapper)
  .catcher(503, errorMapper);
