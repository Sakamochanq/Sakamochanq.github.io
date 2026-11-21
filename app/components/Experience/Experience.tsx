"use client";

import { useEffect, useState } from "react";
import Boot from "../Boot/Boot";
import MainScreen from "../MainScreen/MainScreen";
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

  return (
    <main className={styles.stage}>
      <div className={styles.transitionLayer}>
        <MainScreen />
        {phase !== "main" && (
          <div className={`${styles.bootCurtain} ${phase === "transition" ? styles.curtainRising : ""}`}>
            <Boot />
          </div>
        )}
      </div>
    </main>
  );
}
