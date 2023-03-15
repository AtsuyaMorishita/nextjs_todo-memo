// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

/**
 * 指定したユーザーを取得
 * @param req ユーザーID
 * @param res 特定ののユーザー情報
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userId: any = req.query.userId;

    //mongoDBから全てのユーザーを取得
    const client = await clientPromise;
    const collection = client.db("todoMemoApp").collection("user");
    const user = await collection.find({ _id: new ObjectId(userId) }).toArray();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}
