import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import PokemonPage from "../[id]";
import { pokeApi } from "api";
import type { PokemonListResponse, Pokemon } from "interfaces";

interface PokemonByNamePageProps {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<PokemonByNamePageProps> = ({ pokemon }) => {
  return <PokemonPage pokemon={pokemon} />;
};

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  const paths = pokemonNames.map((name) => ({ params: { name } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

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
