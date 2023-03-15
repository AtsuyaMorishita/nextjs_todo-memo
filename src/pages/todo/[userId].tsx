import TodoArea from "@/components/page/TodoArea";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import LeadArea from "@/components/project/LeadArea";
import MainAreaWrap from "@/components/project/MainArea";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import clientPromise from "../../../lib/mongodb";

type TodoType = {
  id: string;
};

export default function Todo({ id }: TodoType) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    //ログイン中のユーザーの情報を取得する
    const getUser = async () => {
      try {
        const user = await axios.get(`/api/getUser?userId=${id}`);
        await setUserInfo(user.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <Header pageTitle="TODO" />

      <Layout>
        <LeadArea isTodo userInfo={userInfo} />
      </Layout>

      <MainAreaWrap>
        <TodoArea userInfo={userInfo} />
      </MainAreaWrap>
    </>
  );
}

export async function getStaticPaths() {
  //mongoDBから全てのユーザーを取得
  const client = await clientPromise;
  const collection = client.db("todoMemoApp").collection("user");
  const users = await collection.find().toArray();

  const paths = users.map((user) => ({
    params: {
      userId: user._id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.userId;
  if (!id) throw new Error("ユーザーIDが取得できませんでした");

  return {
    props: { id: id ? id : "" },
  };
}
