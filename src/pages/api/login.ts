// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

/**
 * ログイン用のAPI
 * @param req ユーザー名とパスワード
 * @param res 該当のユーザー情報
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //mongoDBから全てのユーザーを取得
    const client = await clientPromise;
    const collection = client.db("todoMemoApp").collection("user");
    const users = await collection.find().toArray();

    const username = req.body.username;
    const password = req.body.password;

    //ユーザーのチェック
    const yourUser = users.find((user) => {
      return user.username === username;
    });
    if (!yourUser) {
      return res.status(500).json("このユーザー名で登録はありません。");
    }

    // パスワードのチェック
    if (yourUser && yourUser.password !== password) {
      return res.status(500).json("パスワードが間違っています。");
    }

    res.status(200).json(yourUser);
  } catch (err) {
    console.log(err);
  }
}
