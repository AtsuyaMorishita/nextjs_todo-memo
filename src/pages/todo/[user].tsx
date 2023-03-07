import TodoArea from "@/components/page/TodoArea";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import LeadArea from "@/components/project/LeadArea";
import MainAreaWrap from "@/components/project/MainArea";

export default function Todo() {
  return (
    <>
      <Header pageTitle="TODO" />

      <Layout>
        <LeadArea isTodo />
      </Layout>

      <MainAreaWrap>
        <TodoArea />
      </MainAreaWrap>
    </>
  );
}
