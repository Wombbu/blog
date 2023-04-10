import faunadb from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Endpoint to keep track of claps for an article
 */
export default async function getClaps(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q = faunadb.query;

  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY || "",
  });

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      message: "Article slug not provided",
    });
  }

  // Check and see if the doc exists.
  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index("claps_by_slug"), slug))
  );

  if (!doesDocExist) {
    return res.status(200).json({
      claps: 0,
    });
  }

  // Fetch the document for-real
  const document = await client.query(
    q.Get(q.Match(q.Index("claps_by_slug"), slug))
  );

  return res.status(200).json({
    claps: document.data.claps,
  });
}
