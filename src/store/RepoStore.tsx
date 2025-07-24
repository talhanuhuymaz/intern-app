import { create } from "zustand";
import request from "../utils/request";

type Repo = {
  bears(bears: any): void;
  id: number;
  name: string;
  description: string;
  html_url: string;
  favorites: boolean;
};


type RepoStore = {
  repoResult: Repo[];
  searchRepo: (username: string) => void;
  clearRepos: () => void;
  addToFavorite: (repoId: number) => void;
};


const useRepoStore = create<RepoStore>((set) => ({
  repoResult: [],
  searchRepo: async (username: string) => {
    try {
      const response = await request(`/users/${username}/repos`);
      set({ repoResult: response });
    } catch (error) {
      set({ repoResult: [] });
    }
  },
  //--------------clearing the repoResult array---------------------
  clearRepos: () => set({ repoResult: [] }),

  //------------------add favorite system-----------------------
  addToFavorite: (repoId: number) => set((state) => ({
    repoResult: state.repoResult.map(repo =>
      repo.id === repoId ? { ...repo, favorites: !repo.favorites } : repo
    )
  })),
}));

export default useRepoStore;
