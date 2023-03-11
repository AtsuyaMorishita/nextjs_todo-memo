import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //mongoDBへユーザーを登録
    const client = await clientPromise;
    const collection = client.db("todoMemoApp").collection("user");
    const users = await collection.find().toArray();

    const username = req.body.username;
    const password = req.body.password;

    //同じユーザー名で既に登録がないかチェック
    const isUser = users.find((user) => {
      return user.username === username;
    });
    if (isUser) {
      return res.status(500).json("このユーザー名は既に登録されています。");
    }

    await collection.insertOne({
      username: username,
      password: password,
      "remaining-tasks": "",
      "memo-title": "",
      "memo-content": "",
      "completed-tasks": "",
    });
    res.status(200).json("新規登録が完了しました！");
  } catch (err) {
    console.log(err);
  }
}
