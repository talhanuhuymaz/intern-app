import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type FavoriteStore = {
  favoriteIds: number[]
  addToFavorites: (repoId:number) => void
  isFavorite: (repoId:number) => boolean
};

const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set,get) => ({
      favoriteIds: [],
      addToFavorites: (repoId) => {
        const favoriteIds = get().favoriteIds;
        const alreadyHas = favoriteIds.includes(repoId);
        const updatedIds = alreadyHas ? favoriteIds.filter(id => id !== repoId) : [...favoriteIds, repoId];
        set({favoriteIds:updatedIds});
      },
      isFavorite: (repoId) => get().favoriteIds.includes(repoId),
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useFavoriteStore;