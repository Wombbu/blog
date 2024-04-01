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
      label={`💡 ${label}`}
      labelButton={
        <button
          className={button.variants.iconButton({ rounded: true })}
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          {expanded ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      }
      className={expanded ? "h-auto" : "h-72 overflow-hidden relative"}
    >
      {content}
      {!expanded ? (
        <>
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-100 h-24 pointer-events-none border-gray-100"
            style={{ borderBottomWidth: "64px" }}
          />
          <button
            className={`absolute bottom-4 sm:bottom-8 left-4 sm:left-6 ${typography.variants.link}`}
            onClick={() => setExpanded((expanded) => !expanded)}
          >
            Lue lisää <MdExpandMore className="inline" />
          </button>
        </>
      ) : null}
      <button
        className={`block mt-2 ${typography.variants.link}`}
        onClick={() => {
          setExpanded((expanded) => !expanded);
          window.scrollTo({
            top: document.getElementById(label)?.offsetTop,
          });
        }}
      >
        {expanded ? "Pienennä" : "Lue lisää"}{" "}
        {expanded ? (
          <MdExpandLess className="inline" />
        ) : (
          <MdExpandMore className="inline" />
        )}
      </button>
    </Card>
  );
}
