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
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

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
