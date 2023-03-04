import Head from "next/head";
import Link from "next/link";
import { Logout } from "@mui/icons-material";

type HeaderType = {
  pageTitle: string;
};

const Header = ({ pageTitle }: HeaderType) => {
  return (
    <div>
      <Head>
        <title>{pageTitle} | TODO&メモ</title>
      </Head>

      <header className="border-b-2">
        <div className="flex justify-between px-8 max-w-7xl h-16">
          <h1 className="flex justify-center flex-col text-xl">TODO&メモ</h1>
          <button className="text-sm">
            <Logout />
            <span className="m-1">ログアウト</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
