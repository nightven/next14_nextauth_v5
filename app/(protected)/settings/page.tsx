import React from "react";
import { auth, signOut } from "@/auth";

type Props = {};

const SettingsPage = async (props: Props) => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">SignOut</button>
      </form>
    </div>
  );
};

export default SettingsPage;
