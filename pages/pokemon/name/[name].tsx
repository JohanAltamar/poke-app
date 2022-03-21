import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import PokemonPage from "../[id]";
import { pokeApi } from "api";
import type { PokemonListResponse, Pokemon } from "interfaces";
import { getPokemonInfo } from "utils";

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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  };
};
