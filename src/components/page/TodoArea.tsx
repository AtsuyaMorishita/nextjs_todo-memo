import { useState } from "react";

const TodoArea = () => {
  //チェックボックスの状態を管理
  const [checked, isChecked] = useState(false);

  //チェック時のスタイル
  const activeStyle = `after:absolute after:w-full after:h-[1px] after:left-0 after:top-[50%] after:bg-main`;
  const checkedStyle = checked ? activeStyle : "";

  const handleCheckbox = () => {
    isChecked(!checked);
  };

  return (
    <>
      <div className="text-center">
        <input
          type="text"
          className="border border-solid w-[300px] h-[50px] px-3 border-main"
        />
        <button className="ml-2 w-[100px] h-[50px] border border-solid bg-accent border-main">
          追加
        </button>
      </div>

      {/* 残タスク */}
      <div className="border border-solid border-main p-10 mt-8">
        <p className="text-2xl font-bold inline-block border-b-4 border-solid border-accent">
          残タスク
        </p>
        <ul className="mt-6">
          <li className="my-3">
            <label
              htmlFor="taskID01"
              className="flex items-center cursor-pointer"
            >
              <input
                id="taskID01"
                type="checkbox"
                className="cursor-pointer w-[20px] h-[20px]"
                onChange={() => handleCheckbox()}
              />
              <p className={`ml-2 relative ${checkedStyle}`}>掃除をする</p>
            </label>
          </li>
        </ul>
      </div>

      {/* 完了タスク */}
      <div className="border border-solid border-main p-10 mt-8">
        <p className="text-2xl font-bold inline-block border-b-4 border-solid border-accent">
          完了タスク
        </p>
        <ul className="mt-6">
          <li className="my-3">
            <label
              htmlFor="taskID02"
              className="flex items-center cursor-pointer"
            >
              <input
                id="taskID02"
                type="checkbox"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <p className="ml-2 relative">掃除をする</p>
            </label>
          </li>
        </ul>
        <div className="text-right">
          <button className="border border-solid px-5 h-[50px] text-[14px] bg-main text-white border-white">
            全て削除する
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoArea;
