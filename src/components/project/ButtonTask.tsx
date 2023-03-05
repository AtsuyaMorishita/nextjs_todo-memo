import { Memory, TodayOutlined } from "@mui/icons-material";
import Link from "next/link";

type ButtonTaskType = {
  taskName: string;
  isTodoIcon?: boolean;
};

/**
 * タスク選択ボタン
 */
const ButtonTask = ({ taskName, isTodoIcon }: ButtonTaskType) => {
  return (
    <Link
      href={isTodoIcon ? "/todo/username" : "/memo/username"}
      scroll={false}
      className="border border-solid text-2xl font-bold text-center w-80 h-56 flex justify-center items-center flex-col mx-2"
    >
      <p className="border-b-4 border-solid">{taskName}</p>
      {isTodoIcon ? (
        <TodayOutlined
          style={{ width: "80px", height: "80px", marginTop: "25px" }}
        />
      ) : (
        <Memory style={{ width: "80px", height: "80px", marginTop: "25px" }} />
      )}
    </Link>
  );
};

export default ButtonTask;
