import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  MypageNav,
  Profile,
  Courses,
  Posts,
  MyPractice,
} from "../../components";

function Mypage() {
  const [pathname, setPathname] = useState("profile");

  useEffect(() => {
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
        <MypageNav setPathname={setPathname} />
      </Grid>
      <Grid xs={8}>{pageRander(pathname)}</Grid>
    </Grid>
  );
}

export default Mypage;
