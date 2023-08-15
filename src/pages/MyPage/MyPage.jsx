import React from "react";
import { Grid } from "@mui/material";
import { MypageNav, Profile, Courses } from "../../components";

function Mypage() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid>
        <MypageNav />
      </Grid>
      <Grid xs={8}>
        {/* <Profile /> */}
        <Courses />
      </Grid>
    </Grid>
  );
}

export default Mypage;
