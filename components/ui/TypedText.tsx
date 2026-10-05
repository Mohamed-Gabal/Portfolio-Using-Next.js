"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number; 
  start?: boolean; 
  onDone?: () => void;
};

export default function TypedText({
  text,
  speed = 45,
  start = true,
  onDone,
}: Props) {
  const chars = Array.from(text);
  const [count, setCount] = useState(0);
  const [prevText, setPrevText] = useState(text);
  const onDoneRef = useRef(onDone);

  if (prevText !== text) {
    setPrevText(text);
    setCount(0);
  }

  useEffect(() => {
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    if (!start) return;

    if (count >= chars.length) {
      onDoneRef.current?.();
      return;
    }

    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [count, start, chars.length, speed]);

  return (
    <>
      <span>{chars.slice(0, count).join("")}</span>
      <span className="invisible" aria-hidden>
        {chars.slice(count).join("")}
      </span>
    </>
  );
}
