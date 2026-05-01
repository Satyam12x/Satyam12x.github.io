"use client";

import { useLayoutEffect, useState } from "react";
import Intro from "./Intro";

const STORAGE_KEY = "sp_intro_seen";

export default function IntroWrapper() {
  const [show, setShow] = useState(true);

  useLayoutEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setShow(false); // runs before first paint — zero flash for returning visitors
    } else {
      localStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  if (!show) return null;
  return <Intro onDone={() => setShow(false)} />;
}
