import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FavoritePokemonCardProps {
  id: number;
}

export const FavoritePokemonCard: React.FC<FavoritePokemonCardProps> = ({
  id,
}) => {
  return (
    <Link href={`/pokemon/${id}`} passHref>
      <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-1 p-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all flex flex-col dark:shadow-none dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={140}
          height={140}
          alt={`Pokemon ${id}`}
        />
      </div>
    </Link>
  );
};
