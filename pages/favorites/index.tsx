import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

import { Layout } from "@/components/layouts";
import { NoFavorite } from "@/components/ui";
import { FavoritePokemons } from "@/components/pokemon";
import { localStorage } from "utils";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localStorage.getFavoriteList());
  }, []);

  return (
    <Layout>
      {favoritePokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
