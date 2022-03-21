import { pokeApi } from "api";
import { Pokemon } from "interfaces";

export const getPokemonInfo = async (idOrName: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(
      `/pokemon/${idOrName.toLowerCase()}`
    );
    return data;
  } catch (error) {
    return null;
  }
};
