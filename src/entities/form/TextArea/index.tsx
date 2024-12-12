import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
import React, { forwardRef } from "react";

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  scrollHeight?: number | string;
  value?: string;
  placeholder?: string;
  className?: string;
}

function Textarea(
  {
    value,
    placeholder = "내용을 입력해주세요.",
    scrollHeight,
    className = "",
    ...props
  }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  return (
    <div
      className={collapseTailwindClassName([
        "relative w-full h-full border border-gray-300 rounded-md p-2",
        scrollHeight ? 'overflow-y-auto' : '',
        value ? 'text-black' : 'text-gray-500',
        className,
      ])}
      style={{
        height: scrollHeight ? scrollHeight : 'auto',
      }}
    >
      {value || placeholder}
      <textarea
        ref={ref}
        {...props}
        className={collapseTailwindClassName([
          "absolute top-0 left-0 w-full h-full p-2 opacity-0",
          className,
        ])}
      />
    </div>
  );
}
export default forwardRef(Textarea);
