import React from "react";
import {User, Link} from "@nextui-org/react";

export default function Avatar() {
  return (
    <User   
      name="Auth"
      description={(
        <Link href="https://instagram.com/auth.dev" size="sm" isExternal>
          @Auth.dev
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/111557161?u=ee215246b22771029eb900a8d0ef73e1788b02aa&amp;v=4"
      }}
    />
  );
}