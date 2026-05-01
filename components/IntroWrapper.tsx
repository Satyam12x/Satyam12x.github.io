"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";

const STORAGE_KEY = "sp_intro_seen";

export default function IntroWrapper() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setShow(false); // returning visitor — hide before first paint
    } else {
      localStorage.setItem(STORAGE_KEY, "1"); // mark immediately so refresh doesn't replay it
    }
  }, []);

  if (!show) return null;

  return <Intro onDone={() => setShow(false)} />;
}
