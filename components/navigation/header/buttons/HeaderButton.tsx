import React from "react";
import Image, { StaticImageData } from "next/image";
//import Elem from '@/public/next.svg'
export default function HeaderButton({Picture}:{Picture:any}) {
  return (
    <button className=" w-full h-full flex hover:bg-slate-500 duration-[180ms] ">
        <Picture className="m-auto" fill="white"></Picture>
    </button>
  );
}
