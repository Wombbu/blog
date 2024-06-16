import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { rateLimitMiddleware } from "@/features/api/middlewares/rateLimitMiddleware";

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_LITE_API_KEY || "",
});

/**
 * Get mailing list subscriber count
 */
async function getSubscriberCount(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({
      message: "Method Not Allowed",
    });
    return;
  }
  try {
    const response = await mailerlite.subscribers.getCount();
    console.log(response);
    res.status(200).json({ count: response.data?.total });
    return;
  } catch (e: any) {
    console.error(e.response.data);
    res.status(500).json({
      message: e.response.data,
    });
  }

  res.status(200).json({});
  return;
}

export default getSubscriberCount;
