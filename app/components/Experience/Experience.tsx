"use client";

import { useEffect, useState } from "react";
import Boot from "../Boot/Boot";
import Home from "../Home/Home";
import Skill from "../Skill/Skill";
import styles from "./Experience.module.css";

const BOOT_DURATION_MS = 2600;
const TRANSITION_DURATION_MS = 1200;

export default function Experience() {
  const [phase, setPhase] = useState<"boot" | "transition" | "main">("boot");

  useEffect(() => {
    const transitionTimer = window.setTimeout(
      () => setPhase("transition"),
      BOOT_DURATION_MS,
    );
    const finishTimer = window.setTimeout(
      () => setPhase("main"),
      BOOT_DURATION_MS + TRANSITION_DURATION_MS,
    );

    return () => {
      window.clearTimeout(transitionTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === "main") return;

    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [phase]);

  return (
    <main
      className={styles.stage}
      onContextMenu={(event) => {
        if (event.target instanceof Element && event.target.closest("img, svg")) {
          event.preventDefault();
        }
      }}
    >
      <div className={styles.transitionLayer}>
        <Home />
        {phase !== "main" && (
          <div className={`${styles.bootCurtain} ${phase === "transition" ? styles.curtainRising : ""}`}>
            <Boot />
          </div>
        )}
      </div>
      <Skill />
    </main>
  );
}
