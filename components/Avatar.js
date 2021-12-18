import React from "react";
import { useMoralis } from "react-moralis";
import Image from "next/image";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-violet-500 cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/personas/${
        username || user.getUsername()
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
}

export default Avatar;
