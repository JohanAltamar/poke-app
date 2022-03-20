import type { NextPage, GetStaticProps } from "next";

import { Layout } from "@/components/layouts";
import { pokeApi } from "api";
import { PokemonListResponse, Pokemon } from "@/interfaces";
import Image from "next/image";

interface HomePageProps {
  pokemons: Pokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 py-5">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-1 p-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all"
          >
            <Image
              src={pokemon.img}
              alt={pokemon.name}
              width={140}
              height={140}
            />
            <div className="flex justify-between">
              <span className="capitalize">{pokemon.name}</span>
              <span className="capitalize">#{pokemon.id}</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: Pokemon[] = data?.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
