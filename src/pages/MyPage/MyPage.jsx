import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  MypageNav,
  Profile,
  Courses,
  Posts,
  MyPractice,
} from "../../components";
import { isAccessExpired } from "../../utils";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const [pathname, setPathname] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAccessExpired()) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
    setPathname(window.location.pathname.split("/")[2]);
  }, []);

  const pageRander = (pathname) => {
    switch (pathname) {
      case "profile":
        return <Profile />;
      case "courses":
        return <Courses />;
      case "posts":
        return <Posts />;
      case "mypractice":
        return <MyPractice />;
      default:
        return <Profile />;
    }
  };

  return (
    <Grid container justifyContent={"center"} gap={"2rem"}>
      <Grid>
        <MypageNav pathname={pathname} setPathname={setPathname} />
      </Grid>
      <Grid item xs={8}>
        {pageRander(pathname)}
      </Grid>
    </Grid>
  );
}

export default Mypage;
