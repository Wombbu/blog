import faunadb from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Endpoint to keep track of claps for an article
 */
export default async function getClaps(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET_KEY || "",
    });

    const { slug } = req.query;

    if (!slug) {
      res.status(400).json({
        message: "Article slug not provided",
      });
      return;
    }

    // Check and see if the doc exists.
    const doesDocExist = await client.query(
      q.Exists(q.Match(q.Index("claps_by_slug"), slug))
    );

    if (!doesDocExist) {
      // Create the document
      await client.query(
        q.Create(q.Collection("claps"), {
          data: { slug, claps: 0 },
        })
      );

      res.status(200).json({
        claps: 0,
      });

      return;
    }

    // Fetch the document for-real
    const document: {
      data: {
        claps: number;
      };
    } = await client.query(q.Get(q.Match(q.Index("claps_by_slug"), slug)));

    res.status(200).json({
      claps: Number(document.data.claps) || 0,
    });
    return;
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
    });
    return;
  }
}
