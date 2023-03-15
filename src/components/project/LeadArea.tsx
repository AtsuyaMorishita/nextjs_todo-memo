import { Memory, TodayOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import clientPromise from "../../../lib/mongodb";
import ButtonTask from "./ButtonTask";

type LeadAreaType = {
  isTodo?: boolean;
  isMemo?: boolean;
  userInfo:
    | {
        username: string;
      }
    | undefined;
};

const LeadArea = ({ isTodo, isMemo, userInfo }: LeadAreaType) => {
  return (
    <div>
      <p className="text-2xl text-center">【2023.03.04】</p>
      <p className="text-xl text-center mt-6">
        {`${
          userInfo && userInfo.username
        } さん 今日も１日頑張っていきましょう🔥`}
      </p>
      <div className="mt-8 flex items-center justify-center">
        <ButtonTask taskName="TODO" isTodoIcon isActive={isTodo} />
        <ButtonTask taskName="メモ" isActive={isMemo} />
      </div>
    </div>
  );
};

export default LeadArea;
