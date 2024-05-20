"use client";

import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-carrent-user";
import React from "react";

type Props = {};

const ClientPage = (props: Props) => {
  const user = useCurrentUser();

  return <UserInfo user={user} label="📱 Client component" />;
};

export default ClientPage;
