import { create } from "zustand";
import request from "../utils/request";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};


type RepoStore = {
  repoResult: Repo[];
  searchRepo: (username: string) => void;
  clearRepos: () => void;
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
}));

export default useRepoStore;
