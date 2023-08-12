import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "curUser", // 고유한 key 값
  storage: localStorage,
});

const initialState = {
  pk: 0,
  email: "",
};

export const userState = atom({
  key: "userState",
  default: initialState,
  effects: [persistAtom],
});

export default userState;
