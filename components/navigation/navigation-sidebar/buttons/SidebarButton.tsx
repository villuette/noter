import React, { MouseEventHandler } from "react";

export default function SidebarButton({
  name,
  Picture,
  selected,
  onClick,
}: {
  name?: string;
  Picture: any;
  selected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <button
      className={`w-full h-[50px]  border-2 
     flex justify-between text-black ${
       selected
         ? "border-[#6778FF] hover:border-[#5462ce]"
         : "hover:border-[#9299CD] border-transparent"
     }`}
      onClick={onClick}
    >
      <Picture className="m-auto inline ml-5 mr-0" fill="black" />
      <p className="m-auto ml-7">{name}</p>
    </button>
  );
}
