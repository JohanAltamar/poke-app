import type { NextPage, GetStaticProps } from "next";

// Apis
import { pokeApi } from "api";

// Layouts
import { Layout } from "@/components/layouts";

// Types
import { PokemonListResponse, SmallPokemon } from "@/interfaces";

// Components
import { PokemonCard } from "@/components/pokemon";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 py-5">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data?.results.map((pokemon, index) => ({
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
