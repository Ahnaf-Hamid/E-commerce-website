import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 py-5">
        <p className="font-mono text-xl sm:text-2xl md:text-3xl text-gray-500">
          {text1} <span className="text-gray-700">{text2}</span>
        </p>
        <p className="w-8 md:w-11 h-[2px] bg-gray-500"></p>
      </div>
    </div>
  );
};

export default Title;
