import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import moment from "moment";

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const refreshToken = Cookie.get("refresh_token");
  const expireAt = localStorage.getItem("access_expiration");
  let token = localStorage.getItem("access_token");

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    // const body = {
    //   refreshToken,
    // };

    // 토큰 갱신 서버통신
    const { data } = await axios.post(
      `accounts/dj-rest-auth/token/refresh/`
      // , body
    );

    console.log(data);

    token = data.access;
    localStorage.setItem("access_token", data.access);
    localStorage.setItem(
      "access_expiration",
      moment().add(30, "minute").format("yyyy-MM-DD HH:mm:ss")
    );
  }

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (err: any) => {
  Cookie.remove("refresh_token");
};

export { refresh, refreshErrorHandle };
