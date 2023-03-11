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
  //mongoDBから全てのユーザーを取得
  const client = await clientPromise;
  const collection = client.db("todoMemoApp").collection("user");
  const users = await collection.find().toArray();

  const username = req.body.username;
  const password = req.body.password;

  //ユーザーのチェック
  const yourUser = users.find((user) => {
    if (user.username !== username) {
      res.status(500).json("このユーザー名で登録はありません。");
    } else {
      console.log("このユーザーは存在しました！");
      return user.username === username;
    }
  });

  // パスワードのチェック
  if (yourUser && yourUser.password !== password) {
    res.status(500).json("パスワードが間違っています。");
  }

  res.status(200).json(yourUser);
}
