import { selector } from "recoil";
import Api from "../../api/api";
import curUser from "./atom";
import { server } from "../../constants";

const withProgram = selector({
  key: "get/user-program-attendant",
  get: async ({ get }) => {
    const { pk, email } = get(curUser);
    if (!pk || !email) return;
    const url = `${server}/programs/myprogram/${pk}/`;

    const response = await Api.get(url);
    return response.data;
  },
});

export default withProgram;
