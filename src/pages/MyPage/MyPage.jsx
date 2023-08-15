import React, { useState } from "react";
import { Grid } from "@mui/material";
import { MypageNav, Profile, Courses } from "../../components";

function Mypage() {
  const [pathname, setPathname] = useState("profile");

  const pageRander = (pathname) => {
    switch (pathname) {
      case "profile":
        return <Profile />;
      case "courses":
        return <Courses />;
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
