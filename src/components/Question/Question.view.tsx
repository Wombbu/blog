"use client";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import React from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";

type Props = {
  title?: string | undefined;
  options: string[];
  /**
   * Index of the correct answer
   */
  answerIndex: number;
  answerDesc: string;
};

export default function Question({
  options,
  answerIndex,
  answerDesc,
  title,
}: Props) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState<
    number | null
  >(null);

  const answered = selectedAnswerIndex != null;
  const correctAnswer = selectedAnswerIndex === answerIndex;

  return (
    <div className="flex flex-col gap-4 max-w-sm m-auto">
      {title ? (
        <h2
          className={`${typography.variants.sectionTitle({
            noGutter: true,
          })}`}
          style={{ marginBottom: "0" }}
        >
          {title}
        </h2>
      ) : null}
      <div className={`flex flex-col gap-2`}>
        {options.map((option, index) => (
          <button
            key={option}
            className={`${button.variants.large} flex-1 ${
              answered && index === selectedAnswerIndex && correctAnswer
                ? "bg-green-700 hover:!bg-green-500 text-white"
                : answered && index === selectedAnswerIndex && !correctAnswer
                ? "bg-red-700 hover:!bg-red-500 text-white"
                : null
            }`}
            style={{
              justifyContent: "flex-start",
            }}
            onClick={() => {
              if (selectedAnswerIndex == null) {
                setSelectedAnswerIndex(index);
              }
            }}
          >
            {answered && index === selectedAnswerIndex && correctAnswer ? (
              <MdCheckCircle className="mr-2 w-7 h-7" />
            ) : answered && index === selectedAnswerIndex && !correctAnswer ? (
              <MdCancel className="mr-2 w-7 h-7" />
            ) : null}
            {option}
          </button>
        ))}
      </div>
      {answered ? (
        <p className={`${typography.variants.textBody}`}>
          {correctAnswer ? "Oikein! 🎉" : "Väärin 😟"} {answerDesc}
        </p>
      ) : null}
    </div>
  );
}
