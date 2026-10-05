"use client";

import { memo } from "react";
import Typewriter from "typewriter-effect";

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = memo(function TypewriterText({
  text,
  delay = 50,
}: TypewriterTextProps) {
  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: false,
        delay,
        cursor: "",
      }}
    />
  );
});

export default TypewriterText;