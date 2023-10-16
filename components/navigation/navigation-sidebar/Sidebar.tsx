'use client'
import React from "react";
import HeadSection from "../header/HeadSection";
import HeaderButton from "../header/buttons/HeaderButton";
import { Friends, Menu, Share, Sync } from "@/public/theme/white/header_buttons/theme";
import SidebarButton from "./buttons/SidebarButton";
import Toolbox from "./buttons/Toolbox";



export default function Sidebar() {
  return (
    <div className="fixed h-full bg-[#B6BDFF] w-[292px] overflow-clip">
      <HeadSection>
        <HeaderButton Picture={Menu}/>
        <HeaderButton Picture={Friends}/>
        <HeaderButton Picture={Share}/>
        <HeaderButton Picture={Sync}/>
      </HeadSection>
      <Toolbox/>
      
    </div>
  );
}
