"use client";

import IconMute from "@/entities/icons/IconMute";
import IconSpeaker from "@/entities/icons/IconSpeaker";
import useListen from "@/hooks/useListen";
import SpeechToText from "@/share/SpeechToText";

export default function Home() {
  const {handleSpeaker, isSpeaking, setText, text} = useListen()
  return (
    <div className="w-full h-full px-4 py-8 mx-auto max-w-lg">

      <div className="flex justify-end">
        <button onClick={() => handleSpeaker()}>
          {isSpeaking ? <IconMute /> : <IconSpeaker />}
        </button>
      </div>
      {text}
      <div className="flex flex-col gap-2 items-end pt-4">
        <SpeechToText onChange={setText} />
      </div>
    </div>
  );
}
