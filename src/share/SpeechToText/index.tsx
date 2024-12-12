/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import TextArea from "@/entities/form/TextArea";
import IconMic from "@/entities/icons/IconMic";
import IconRecord from "@/entities/icons/IconRecord";
import useSpeech from "@/hooks/useSpeech";
import { useEffect, useState } from "react";

// SpeechToText 컴포넌트는 음성 인식 기능을 제공하는 페이지입니다.
export default function SpeechToText({
  onChange,
}: {
  onChange?: (text: string) => void;
}) {
  const [value, setValue] = useState(""); // 입력된 텍스트를 저장
  const [voice, setVoice] = useState(""); // 인식된 음성을 저장

  const { isListening, transcript, startListening, stopListening, error } =
    useSpeech({
      lang: "ko-KR",
      continuous: true,
      interimResults: true,
    });

  const handleStopRecording = () => {
    setValue(value + voice); // 인식된 음성을 입력된 텍스트에 추가
    stopListening(); // 인식 중지
    setVoice(""); // 음성 초기화
  };

  useEffect(() => {
    setVoice(transcript.current); // 인식된 텍스트를 음성 상태에 저장
  }, [transcript.current]);

  return (
    <>
      <div className="relative w-full">
        <TextArea
          value={isListening ? value + voice : value} // 듣고 있을 때는 음성을 포함한 텍스트 표시
          onChange={(e) => setValue(e.target.value)} // 입력된 텍스트 업데이트
          onKeyDown={() => {
            if (isListening) handleStopRecording(); // 듣고 있을 때 키를 누르면 녹음 중지
          }}
          className="pl-12"
        />
        <button
          className="absolute top-1/2 -translate-y-1/2 left-1 bg-white rounded-full p-2"
          title={isListening ? "녹음 중지" : "녹음 시작"}
          onClick={() => {
            if (error) return alert(error); //음성지원에 에러가 있을때 작동안함
            if (isListening)
              handleStopRecording(); // 듣고 있을 때 버튼을 누르면 녹음 중지
            else startListening(); // 듣고 있지 않을 때 버튼을 누르면 녹음 시작
          }}
        >
          {isListening ? <IconRecord /> : <IconMic />}
        </button>
      </div>
      <button
        onClick={() => {
          onChange?.(value);
          setValue("");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        저장
      </button>
    </>
  );
}
