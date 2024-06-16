import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { rateLimitMiddleware } from "@/features/api/middlewares/rateLimitMiddleware";
import { mailerLiteGroupIds } from "@/model/subscribers/constants/mailerLiteGroupIds";

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_LITE_API_KEY || "",
});

/**
 * Create mailing list subscriber
 */
async function subscribers(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method Not Allowed",
    });
    return;
  }

  const email = req.body.email;

  let existingSubscriber;

  try {
    existingSubscriber = await mailerlite.subscribers.find(email);

    if (existingSubscriber.data.data.status === "active") {
      res.status(422).json({
        message: "Subscriber is already active",
      });
      return;
    }
  } catch (e: any) {}

  try {
    await mailerlite.subscribers.createOrUpdate({
      email: req.body.email,
      groups: [mailerLiteGroupIds.posts],
      status: "unconfirmed",
    });
  } catch (e: any) {
    res.status(500).json({
      message: e.response.data,
    });
  } finally {
    res.status(200).json({});
  }
}

export default rateLimitMiddleware({
  handler: subscribers,
  limit: 5,
  // 20 hours
  windowMs: 1000 * 60 * 60 * 20,
});
