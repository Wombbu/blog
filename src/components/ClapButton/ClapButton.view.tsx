import { ClapIcon } from "@/components/ClapButton/ClapIcon.view";
import { palette } from "@/essentials/theme/palette";
import React, { useRef } from "react";

import styles from "./ClapButton.module.css";

type Props = {
  totalClaps: number;
  userClaps: number;
  onClap: () => void;
  noClapsSentInThisSession: boolean;
  disabled: boolean;
};
export const ClapButton = ({
  totalClaps,
  userClaps,
  onClap,
  noClapsSentInThisSession,
  disabled,
}: Props) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center relative" ref={buttonRef}>
      <div
        className={`${styles.clapCount} ${
          noClapsSentInThisSession ? null : styles.clapCountAnimation
        }`}
      >
        +{userClaps}
      </div>
      <button
        className={`${styles.clapButton} ${palette.text.secondary} `}
        onClick={() => {
          buttonRef.current
            ?.getAnimations({ subtree: true })
            .forEach((anim) => {
              anim.cancel();
              anim.play();
            });
          onClap();
        }}
        disabled={disabled}
      >
        <ClapIcon
          className={`${styles.clapIcon}`}
          style={{
            ...(disabled
              ? { fill: "lightgrey", strokeWidth: "0px" }
              : noClapsSentInThisSession
              ? {}
              : { fill: "rgb(21, 128, 61)", strokeWidth: "0px" }),
          }}
        />
        {totalClaps}
      </button>
    </div>
  );
};
