import React from "react";
import Image from "next/image";

import { Pokemon } from "@/interfaces";

export const PokemonCard: React.FC<Pokemon> = ({ id, name, img }) => {
  return (
    <div
      key={id}
      className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-1 p-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all"
    >
      <Image src={img} alt={name} width={140} height={140} />
      <div className="flex justify-between">
        <span className="capitalize">{name}</span>
        <span className="capitalize">#{id}</span>
      </div>
    </div>
  );
};
