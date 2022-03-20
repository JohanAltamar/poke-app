import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-0 px-5 bg-red-600 dark:bg-gray-800 text-white">
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
      <Link href="/favorites" passHref>
        Favorites
      </Link>
    </div>
  );
};
