import React from "react";

import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface FavoritePokemonsProps {
  pokemons: number[];
}
export const FavoritePokemons: React.FC<FavoritePokemonsProps> = ({
  pokemons,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 py-5">
      {pokemons.map((pokemonId) => (
        <FavoritePokemonCard key={pokemonId} id={pokemonId} />
      ))}
    </div>
  );
};
