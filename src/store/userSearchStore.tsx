import { create } from "zustand";
import request from "../utils/request";
import { GitHubUser } from "./types/GitUserType";
import debounce from "lodash/debounce";

//type of the state
type UserSearchStore = {
  searchResult: GitHubUser[];
  searchUser: (username: string) => void;
  hasSearched: boolean;
  clear: () => void;
};


const debouncedSearch = debounce(async (username: string, set: any) => {
  try {
    const response = await request(`/search/users?q=${username}`);
    set({ searchResult: response.items, hasSearched: true });
  } catch (error) {
    set({ searchResult: [], hasSearched: true  });
  }
}, 300, { leading: true, trailing: true }); 

const useUserSearchStore = create<UserSearchStore>((set) => ({
  searchResult: [],
   hasSearched: false,
  searchUser: (username: string) => {
  if (username === "") {            //DebouncedSearch works even if a space is entered in TextInput so added this if statement
    set({ searchResult: [], hasSearched: false  }); 
  }
  else{
    debouncedSearch(username, set);
  }
    
  },
  clear: () => set({ searchResult: [] , hasSearched: false }),
}));

export default useUserSearchStore;
