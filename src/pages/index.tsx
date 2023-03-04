import Form from "@/components/page/Form";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header pageTitle="ログイン・新規登録" />

      <Layout>
        <Form formTitle="ログイン" buttonName="ログイン" />
        <Form formTitle="新規登録" buttonName="登録する" isRegister />
      </Layout>
    </>
  );
};

export default Home;
