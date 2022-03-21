import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NoFavorite = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <span className="mb-5">
        No Favorites, please go to{" "}
        <Link href="/">
          <a className="underline hover:text-gray-700 visited:text-gray-500">
            Pokemon List
          </a>
        </Link>
      </span>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }
        alt="No favorite"
        height={140}
        width={140}
      />
    </div>
  );
};
