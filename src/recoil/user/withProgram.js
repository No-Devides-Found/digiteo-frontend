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

    try {
      const response = await Api.get(url);
      console.log(response.data);
      return response.data;
    } catch (err) {
      throw Error("유저 프로그램 참여 정보 가져오기 실패");
    }
  },
});

export default withProgram;
