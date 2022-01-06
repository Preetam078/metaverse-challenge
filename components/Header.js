import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className=" sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-500">
      <div className="text-white">
        <div className="text-left lg:text-center">
          <div className=" relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className=" text-3xl">Welcome to the Metaverse</h1>
          <h2 className="text-white text-3xl truncate font-black mt-2">
            {user.getUsername().toUpperCase()}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
