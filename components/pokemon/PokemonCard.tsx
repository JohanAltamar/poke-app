import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SmallPokemon } from "@/interfaces";

export const PokemonCard: React.FC<SmallPokemon> = ({ id, name, img }) => {
  return (
    <Link href={`/pokemon/name/${name}`} passHref>
      <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-1 p-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all flex flex-col">
        <Image src={img} alt={name} width={140} height={140} />
        <div className="flex justify-between">
          <span className="capitalize">{name}</span>
          <span className="capitalize">#{id}</span>
        </div>
      </div>
    </Link>
  );
};
