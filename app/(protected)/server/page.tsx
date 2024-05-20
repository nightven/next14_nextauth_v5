import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import React from "react";

type Props = {};

const ServerPage = async(props: Props) => {

  const user = await currentUser();

  return <UserInfo user={user} label="💻 Server component" />;
};

export default ServerPage;
