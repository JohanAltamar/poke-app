const toggleFavorites = (id: number) => {
  if (ssr()) return;

  let favorites = getFavoriteList();

  if (Array.isArray(favorites)) {
    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

const isInFavoriteList = (id: number): boolean => {
  if (ssr()) return false;

  const favorites = getFavoriteList();
  return favorites.includes(id);
};

const getFavoriteList = (): number[] => {
  if (ssr()) return [];

  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

const ssr = (): boolean => {
  return typeof window === "undefined";
};

const localStorageFunctions = {
  toggleFavorites,
  isInFavoriteList,
  getFavoriteList,
};

export default localStorageFunctions;
