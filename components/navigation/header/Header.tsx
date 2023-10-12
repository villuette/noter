import { UserButton } from "@clerk/nextjs";
import { AccountCircle } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import React from "react";

export default function Header({
  children,
}: {
  children: React.ReactNode[] | null;
}) {
  return (
    <div className="bg-blue-600 w-full flex h-10 justify-between">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        className="h-full"
      >
        {children}
      </ButtonGroup>
      <div className="mr-6">
        <UserButton />
      </div>
    </div>
  );
}
