import TodoArea from "@/components/page/TodoArea";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import LeadArea from "@/components/project/LeadArea";
import MainAreaWrap from "@/components/project/MainArea";
import { GetStaticPropsContext } from "next";
import clientPromise from "../../../lib/mongodb";

type TodoType = {
  id: string;
};

export default function Todo({ id }: TodoType) {
  //TODO: ユーザー名をLeadAreaコンポーネントへ渡す

  return (
    <>
      <Header pageTitle="TODO" />

      <Layout>
        <LeadArea isTodo userId={id} />
      </Layout>

      <MainAreaWrap>
        <TodoArea />
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
