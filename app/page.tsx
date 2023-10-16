import { SignIn, SignOutButton, SignedOut, UserButton } from "@clerk/nextjs";
import Sidebar from "@/components/navigation/navigation-sidebar/Sidebar";
import {
  Button,
  ButtonGroup,
  IconButton,
  IconButtonClasses,
} from "@mui/material";
import { AccountCircle, Assignment, Logout } from "@mui/icons-material";
import initialProfile from "@/lib/initial-profile";
import ShortCommands from "@/components/ShortCommands";

export default async function Home() {
  const user = await initialProfile()
  return (
    <div className="h-fit w-full flex flex-row">
      <Sidebar />
      {/* Вынести контент в компоненту */}
      <div className="text-white w-full h-[9000px] bg-[#C1C6F5] 
       ml-[292px] relative">
        <ShortCommands/>
      </div>
    </div>
  );
}
