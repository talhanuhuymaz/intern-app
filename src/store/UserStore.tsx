import { create } from "zustand";

//type of the state
type UserState = {
    username: string;
    setUsername: (name: string) => void;
};

const UserStore = create<UserState>((set) => ({
    username:'',
    setUsername: (name) => set ({ username: name}),
}));

export default UserStore;