import LoginForm from "@/components/page/LoginForm";
import RegisterForm from "@/components/page/RegisterForm";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import clientPromise from "../../lib/mongodb";

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("mondoDBと接続状況", isConnected);

  const cookie = document.cookie.split(";");
  console.log(cookie);

  return (
    <>
      <Header pageTitle="ログイン・新規登録" />

      <Layout>
        <LoginForm formTitle="ログイン" buttonName="ログイン" />
        <RegisterForm formTitle="新規登録" buttonName="登録する" isRegister />
      </Layout>
    </>
  );
}

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
