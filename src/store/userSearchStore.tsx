import { create } from "zustand";
import request from "../utils/request";
import { GitHubUser } from "./types/GitUserType";
import debounce from "lodash/debounce";


//type of the state
type UserSearchStore = {
    searchResult: GitHubUser[];
    searchUser: (username: string) => Promise<void>;
    clear: () => void;
}


const useUserSearchStore = create<UserSearchStore>((set) => ({
    searchResult: [],
    searchUser: async (username) => {
        try {
            const response = await request(`/search/users?q=${username}`);
            set({ searchResult: response.items });
        } catch (error) {
            set({ searchResult: [] });
        }
    },
    clear: () => set({ searchResult: [] })
}));

export default useUserSearchStore;