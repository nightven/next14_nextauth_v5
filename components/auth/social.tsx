import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

type Props = {};

const Social = (props: Props) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
