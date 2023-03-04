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
    <div className="border border-solid border-gray-500 mt-7 first:mt-0">
      <div className="text-center">
        <h2 className="inline-block text-2xl font-semibold border-b-4">
          {formTitle}
        </h2>
      </div>

      <form action="">
        <label htmlFor="form-user">
          <span>ユーザー名</span>
          <input type="text" id="form-user" />
        </label>

        <label htmlFor="form-password">
          <span>パスワード</span>
          <input type="text" id="form-password" />
        </label>

        <input type="submit" placeholder={buttonName} />
      </form>

      <p>{isRegister ? "登録済みの方はこちらへ" : "未登録の方はこちらへ"}</p>
    </div>
  );
};

export default Form;
