import { selector } from "recoil";
import Api from "../../api/api";
import curUser from "./atom";
import { server } from "../../constants";

const withPost = selector({
  key: "get/user-post",
  get: async ({ get }) => {
    const { pk, email } = get(curUser);
    if (!pk || !email) return;
    const url = `${server}/posts/mypost/${pk}/`;

    const response = await Api.get(url);
    return response.data;
  },
});

export default withPost;
