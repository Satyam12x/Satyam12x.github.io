"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";

const STORAGE_KEY = "sp_intro_seen";

export default function IntroWrapper() {
  // Default true so the overlay is rendered immediately — prevents main content
  // from flashing before we've had a chance to check localStorage.
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setShow(false); // returning visitor — remove overlay after first paint
    }
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
