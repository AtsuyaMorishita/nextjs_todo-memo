import Head from "next/head";
import Link from "next/link";
import { Logout } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

type FormType = {
  formTitle: string;
  buttonName: string;
  isRegister?: boolean;
};

const LoginForm = ({ formTitle, buttonName, isRegister }: FormType) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    console.log(e);
    e.preventDefault();

    try {
      await axios
        .post("/api/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          Cookies.set("loginUser", JSON.stringify(response.data), { expires: 1 });
          const id = response.data._id;
          router.push(`/todo/${id}`);
        });
    } catch (err: any) {
      console.log(err);
      const errorMessage = err.response.data;
      alert(errorMessage);
    }
  };

  return (
    <div className="border border-solid mt-10 first:mt-0 py-11 px-8 max-w-3xl mx-auto border-main">
      <div className="text-center mb-8">
        <h2 className="inline-block text-2xl font-semibold border-b-4 border-accent">
          {formTitle}
        </h2>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="form-user" className="flex items-center justify-center">
          <span>ユーザー名</span>
          <input
            type="text"
            id="form-user"
            className="border border-solid p-2 text-sm ml-4 w-80 border-main"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            className="border border-solid p-2 text-sm ml-4 w-80 border-main"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="text-center mt-8">
          <input
            type="submit"
            value={buttonName}
            className="w-56 h-12 border border-solid border-main bg-accent"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
