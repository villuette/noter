import { SignIn, SignOutButton, SignedOut, UserButton } from "@clerk/nextjs";
import "./main.css";
import Sidebar from "@/components/navigation/navigation-sidebar/Sidebar";
import Header from "@/components/navigation/header/Header";
import {
  Button,
  ButtonGroup,
  IconButton,
  IconButtonClasses,
} from "@mui/material";
import { AccountCircle, Assignment, Logout } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="h-full">
      <Header>
        <Button color="info" startIcon={<AccountCircle />}>
          Friends
        </Button>
        <Button color="success" startIcon={<Assignment/>}>Notes</Button>
      </Header>
      <Sidebar />
    </div>
  );
}
