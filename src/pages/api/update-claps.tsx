import faunadb from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Endpoint to keep track of claps for an article
 */
export default async function updateClaps(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({});
  return;

  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET_KEY || "",
    });

    const { slug, count } = req.query;

    const incrementClapsCount = Number(count);

    if (!slug) {
      res.status(400).json({
        message:
          "Article slug not provided. Please provide 'slug' and 'count' query parameters",
      });

      return;
    }

    if (
      isNaN(incrementClapsCount) ||
      incrementClapsCount > 50 ||
      incrementClapsCount < 0
    ) {
      res.status(400).json({
        message:
          "Clap count not provided or is of wrong format or is too large or negative. Please provide 'slug' and 'count' query parameters",
      });
      return;
    }

    // Check and see if the doc exists.
    const doesDocExist = await client.query(
      q.Exists(q.Match(q.Index("claps_by_slug"), slug))
    );

    if (!doesDocExist) {
      await client.query(
        q.Create(q.Collection("claps"), {
          data: { slug: slug, claps: 0 },
        })
      );
    }
    // Fetch the document for-real
    const document: {
      ref: faunadb.ExprArg;
      data: {
        claps: number;
      };
    } = await client.query(q.Get(q.Match(q.Index("claps_by_slug"), slug)));

    await client.query(
      q.Update(document.ref, {
        data: {
          claps: document.data.claps + incrementClapsCount,
        },
      })
    );

    res.status(200).json({});
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}
