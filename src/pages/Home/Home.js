import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios
      .post("account/signup/", {
        username: "user",
        password: "user",
        email: "user@user.user",
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
