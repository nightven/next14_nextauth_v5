"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { ExitIcon} from "@radix-ui/react-icons"
import { useCurrentUser } from "@/hooks/use-carrent-user";
import LogOutButton from "@/components/auth/logout-button";

type Props = {};

const UserButton = (props: Props) => {
    const user = useCurrentUser();
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser  className="text-white" />
          </AvatarFallback>
        </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end" >
              <LogOutButton>
                  <DropdownMenuItem>
                      <ExitIcon className="h-4 w-4 mr-2"/>
                      LogOut
                  </DropdownMenuItem>
              </LogOutButton>
          </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
