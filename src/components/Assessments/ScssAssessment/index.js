import React from "react";

export default function ScssAssessment() {
  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-none text-left">
        <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
          1. Styling
        </h3>
        <p className="subpixel-antialiased w-fit m-2">
          In this first test we will try out your skills in styling elements.
        </p>
        <p className="subpixel-antialiased w-fit m-2">
          Your goal is to reproduce the checkerboard presented in the picture
          below with HTML elements, and SCSS or Tailwind styling.{" "}
          <span className="font-bold">
            Before starting your work, please refer to the README for more
            detailed directions!
          </span>
        </p>
        <img src="/images/styling-test.png" alt="styling-test" />
      </div>
      <div className="checker-wrapper w-[500px] h-[500px] mr-[20px]">
        <div className="grid grid-cols-[120px_260px_120px] h-[200px] border-[1px] border-[#e479e8]">
          <div className="purple-cell ">john</div>
          <div className="green-cell">doe</div>
          <div className="purple-cell ">john</div>
        </div>
        <div className="grid grid-cols-[350px_150px] h-[300px] ">
          <div className="green-cell border-r-[1px] border-[#e479e8]">doe</div>
          <div className="flex flex-col">
            <div className="h-[150px] green-cell">doe</div>
            <div className="h-[150px] purple-cell">john</div>
          </div>
        </div>
      </div>
    </div>
  );
}
