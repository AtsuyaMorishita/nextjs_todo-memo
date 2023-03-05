const TodoArea = () => {
  return (
    <>
      <div className="text-center">
        <input type="text" className="border border-solid" />
        <button className="ml-2">追加</button>
      </div>

      <div className="border border-solid p-10 mt-8">
        <p className="text-2xl font-bold inline-block border-b-4 border-solid">
          残タスク
        </p>
        <ul className="mt-6">
          <li>
            <label htmlFor="" className="flex items-center ">
              <input type="checkbox" className="cursor-pointer" />
              <p className="ml-2">掃除をする</p>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoArea;
