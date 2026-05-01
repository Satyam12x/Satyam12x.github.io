"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";

const STORAGE_KEY = "sp_intro_seen";

export default function IntroWrapper() {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    setShow(!localStorage.getItem(STORAGE_KEY));
  }, []);

  if (!show) return null;

  return (
    <Intro
      onDone={() => {
        localStorage.setItem(STORAGE_KEY, "1");
        setShow(false);
      }}
    />
  );
}
