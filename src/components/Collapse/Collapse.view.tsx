"use client";
import { Card } from "@/components/Card/Card";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

type Props = {
  label: string;
  content: React.ReactNode;
};

export default function Collapse({ label, content }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      id={label}
      label={`${label}`}
      className={expanded ? "h-auto" : "h-72 overflow-hidden relative"}
    >
      {content}
      {!expanded ? (
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-gradient-to-b from-transparent to-gray-100 pointer-events-none h-12" />
          <div className="flex justify-center  py-6 sm:py8 bg-gray-100">
            <button
              className={`${button.rounded.secondary.medium}`}
              onClick={() => setExpanded((expanded) => !expanded)}
            >
              <MdExpandMore className="inline w-6 h-6" />
              Lue lisää
            </button>
          </div>
        </div>
      ) : null}
      <button
        className={`block mt-6 sm:mt-8 ${button.rounded.secondary.medium} m-auto`}
        onClick={() => {
          setExpanded((expanded) => !expanded);
          window.scrollTo({
            top: document.getElementById(label)?.offsetTop,
          });
        }}
      >
        <MdExpandLess className="inline w-6 h-6" /> Pienennä
      </button>
    </Card>
  );
}
