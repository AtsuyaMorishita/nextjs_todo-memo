import Head from "next/head";
import Link from "next/link";
import { Logout } from "@mui/icons-material";

type FormType = {
  formTitle: string;
  buttonName: string;
  isRegister?: boolean;
};

const Form = ({ formTitle, buttonName, isRegister }: FormType) => {
  return (
    <div className="border border-solid mt-10 first:mt-0 py-11 px-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="inline-block text-2xl font-semibold border-b-4">
          {formTitle}
        </h2>
      </div>

      <form action="">
        <label htmlFor="form-user" className="flex items-center justify-center">
          <span>ユーザー名</span>
          <input
            type="text"
            id="form-user"
            className="border border-solid p-2 text-sm ml-4 w-80"
          />
        </label>

        <label
          htmlFor="form-password"
          className="flex items-center justify-center mt-5"
        >
          <span>パスワード</span>
          <input
            type="text"
            id="form-password"
            className="border border-solid p-2 text-sm ml-4 w-80"
          />
        </label>

        <div className="text-center mt-8">
          <input
            type="submit"
            value={buttonName}
            className="w-56 h-12 border border-solid"
          />
        </div>
      </form>

      {/* <Link href={isRegister ? "#" : "#"} className="text-right text-sm">
        {isRegister ? "登録済みの方はこちらへ" : "未登録の方はこちらへ"}
      </Link> */}
    </div>
  );
};

export default Form;
