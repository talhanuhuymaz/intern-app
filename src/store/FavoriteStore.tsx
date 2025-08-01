import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type FavoriteStore = {
  favoriteRepos: any[];
  addToFavorites: (repo: any) => void;
  removeFromFavorites: (repoId: number) => void;
  isFavorite: (repoId: number) => boolean;
};

const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favoriteRepos: [],
      addToFavorites: (repo) => {
        const favoriteRepos = get().favoriteRepos;
        const alreadyHas = favoriteRepos.some(r => r.id === repo.id);
        const updatedRepos = alreadyHas ? favoriteRepos.filter(r => r.id !== repo.id) : [...favoriteRepos, repo];
        set({ favoriteRepos: updatedRepos });
      },
      removeFromFavorites: (repoId) => {
        const updatedRepos = get().favoriteRepos.filter(r => r.id !== repoId);
        set({ favoriteRepos: updatedRepos });
      },
      isFavorite: (repoId) => get().favoriteRepos.some(r => r.id === repoId),
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useFavoriteStore;
