import { create } from "zustand";
import request from "../utils/request";
import { GitHubUser } from "./types/GitUserType";

type UserDetailStore = {
  user: GitHubUser | null;
  fetchUser: (username: string) => void;
};

const useUserDetailStore = create<UserDetailStore>((set) => ({
  user: null,
  fetchUser: async (username: string) => {
    try {
      const response = await request(`/users/${username}`);
      set({ user: response });
    } catch (error) {
      set({ user: null });
    }
  },
}));

export default useUserDetailStore;
