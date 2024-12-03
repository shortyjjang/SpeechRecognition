/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import IconMic from "@/entities/icons/IconMic";
import IconRecord from "@/entities/icons/IconRecord";
import useSpeech from "@/hooks/useSpeech";
import { useEffect, useState } from "react";

// SpeechToText 컴포넌트는 음성 인식 기능을 제공하는 페이지입니다.
export default function SpeechToText() {
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
    <div>
      <input
        type="text"
        className="text-black"
        value={isListening ? value + voice : value} // 듣고 있을 때는 음성을 포함한 텍스트 표시
        onChange={(e) => setValue(e.target.value)} // 입력된 텍스트 업데이트
        onKeyDown={() => {
          if (isListening) handleStopRecording(); // 듣고 있을 때 키를 누르면 녹음 중지
        }}
      />
      <button
        className="bg-white rounded-full p-2"
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
  );
}
