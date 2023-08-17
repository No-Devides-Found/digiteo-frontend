import { selector } from "recoil";
import Api from "../../api/api";
import curUser from "./atom";
import { server } from "../../constants";

const withProfile = selector({
  key: "get/user-profile",
  get: async ({ get }) => {
    const { pk, email } = get(curUser);
    if (!pk || !email) return;
    const url = `${server}/accounts/profile/${pk}/`;

    const response = await Api.get(url);
    return response.data;
  },
});

export default withProfile;
