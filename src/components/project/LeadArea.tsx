import { Memory, TodayOutlined } from "@mui/icons-material";
import Link from "next/link";
import ButtonTask from "./ButtonTask";

const LeadArea = () => {
  return (
    <div>
      <p className="text-2xl text-center">【2023.03.04】</p>
      <p className="text-xl text-center mt-6">
        森下 さん 今日も１日頑張っていきましょう🔥
      </p>
      <div className="mt-8 flex items-center justify-center">
        <ButtonTask taskName="TODO" isTodoIcon />
        <ButtonTask taskName="メモ" />
      </div>
    </div>
  );
};

export default LeadArea;
