import React from "react";

type Props = {
  children: React.ReactNode;
};

export const FullWidthGray = (props: Props) => (
  <div
    className={`relative w-screen bg-gray-100 py-6 sm:py-6 mt-6`}
    style={{ left: "calc(-50vw + 50%)" }}
    data-theme="light"
  >
    <div className="flex flex-col items-stretch max-w-screen-lg px-4 sm:px-8 m-auto">
      {props.children}
    </div>
  </div>
);
