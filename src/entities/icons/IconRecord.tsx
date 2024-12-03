import { collapseTailwindClassName } from "@/utill/collapseClassName";
import React from "react";

export default function IconRecord({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={collapseTailwindClassName([`w-[24px] h-[24px]`, className])}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className="w-full h-full"
      >
        <path d="M280-240v-480h80v480h-80ZM440-80v-800h80v800h-80ZM120-400v-160h80v160h-80Zm480 160v-480h80v480h-80Zm160-160v-160h80v160h-80Z" />
      </svg>
    </div>
  );
}
