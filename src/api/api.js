import axios from "axios";
import { refresh, refreshErrorHandle } from "./refresh.ts";

const Api = axios.create({
  timeout: 10000,
  params: {},
});

Api.interceptors.request.use(refresh, refreshErrorHandle);

export default Api;
