"use client";
import { logout } from "@/actions/loguot";
import { useRouter } from "next/router";
import React from "react";

interface LogOutButtonProps {
  children?: React.ReactNode;
}

const LogOutButton = ({ children }: LogOutButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
    logout();


  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogOutButton;
