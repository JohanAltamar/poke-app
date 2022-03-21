import React, { useState } from "react";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { pokeApi } from "api";
import { Pokemon } from "interfaces";
import { localStorage } from "utils";

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.isInFavoriteList(pokemon.id)
  );

  const handleToggleFavorite = () => {
    localStorage.toggleFavorites(pokemon.id);
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      confetti({
        angle: -120,
        spread: 100,
        particleCount: 200,
        origin: { y: 0, x: 1 },
      });
    }
  };

  return (
    <Layout pokemon={pokemon.name}>
      <div className="grid grid-cols-12 gap-4 py-5">
        <div className="col-span-12 sm:col-span-4 justify-self-center p-4 rounded-lg shadow-md w-full flex justify-center">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default || ""}
            alt={pokemon.name}
            width={140}
            height={140}
          />
        </div>
        <div className="col-span-12 sm:col-span-8 p-4 rounded-lg shadow-md">
          <div className="flex w-full justify-between">
            <h1 className="capitalize font-semibold text-2xl">
              {pokemon.name}
            </h1>
            <button
              className="text-white rounded-xl bg-red-600 hover:bg-red-500 transition-colors px-4 flex items-center justify-center font-semibold"
              onClick={handleToggleFavorite}
            >
              {isFavorite ? "Remove Favorite" : "Add Favorite"}
            </button>
          </div>
          <div>
            <span>Sprites:</span>
            <div className="flex w-full justify-between">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...Array(151)].map((_, index) => ({
    params: { id: `${index + 1}` },
  }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: {
        name: data.name,
        id: data.id,
        sprites: data.sprites,
      },
    },
    revalidate: 86400,
  };
};
