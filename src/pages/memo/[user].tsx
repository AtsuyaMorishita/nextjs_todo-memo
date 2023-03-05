import MemoArea from "@/components/page/MemoArea";
import Header from "@/components/project/Header";
import Layout from "@/components/project/Layout";
import LeadArea from "@/components/project/LeadArea";
import MainAreaWrap from "@/components/project/MainArea";

export default function Memo() {
  return (
    <>
      <Header pageTitle="メモ" />

      <Layout>
        <LeadArea />
      </Layout>

      <MainAreaWrap>
        <MemoArea />
      </MainAreaWrap>
    </>
  );
}
