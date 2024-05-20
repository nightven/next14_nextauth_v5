"use client";

import { logout } from "@/actions/loguot";
import { useCurrentUser } from "@/hooks/use-carrent-user";
import React from "react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={onClick}>
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
