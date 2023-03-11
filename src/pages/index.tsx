import Form from "@/components/page/Form";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import clientPromise from "../../lib/mongodb";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("mondoDBと接続状況", isConnected);

  return (
    <>
      <Header pageTitle="ログイン・新規登録" />

      <Layout>
        <Form formTitle="ログイン" buttonName="ログイン" />
        <Form formTitle="新規登録" buttonName="登録する" isRegister />
      </Layout>
    </>
  );
}
