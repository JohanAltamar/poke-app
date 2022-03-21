import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeSelector } from "@/components/ui";

export const Navbar = () => {
  return (
    <div className="flex h-[70px] justify-between items-center w-full p-0 px-5 bg-red-600 dark:bg-gray-900 text-white">
      <Link href="/" passHref>
        <a className="text-2xl flex items-center hover:cursor-pointer">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="app icon"
            width={70}
            height={70}
          />
          <span className="text-3xl">P</span>okémon
        </a>
      </Link>
      <div className="flex h-full">
        <ThemeSelector />
        <Link href="/favorites" passHref>
          <a className="h-full flex items-center">Favorites</a>
        </Link>
      </div>
    </div>
  );
};
