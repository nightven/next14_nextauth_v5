"use client";
import { logout } from "@/actions/loguot";
import React from "react";

interface LogOutButtonProps {
  children?: React.ReactNode;
}

const LogOutButton = ({ children }: LogOutButtonProps) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogOutButton;
