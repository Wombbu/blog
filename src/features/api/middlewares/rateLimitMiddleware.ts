import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";

const rateLimitMap = new Map();

export const rateLimitMiddleware =
  ({
    handler,
    limit,
    windowMs,
  }: {
    /**
     * Api handler created by programmer
     */
    handler: NextApiHandler;
    /**
     * Limit requests to this amount per window
     */
    limit: number;
    /**
     * This sets the window to which the limit applies
     */
    windowMs: number;
  }) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(ip);

    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      res.status(429).json({ message: "Too Many Requests" });
      return;
    }

    ipData.count += 1;

    return handler(req, res);
  };
