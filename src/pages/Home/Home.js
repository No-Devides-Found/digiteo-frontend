import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios
      .post("/accounts/dj-rest-auth/login/", {
        username: "user5",
        password: "u1234567",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return <div>홈페이지</div>;
}

export default Home;
