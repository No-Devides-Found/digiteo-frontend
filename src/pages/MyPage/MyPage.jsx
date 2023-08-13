import React from "react";
import MypageNav from "./MypageNav";
import { Grid } from "@mui/material";

function MyPage() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid>
        <MypageNav />
      </Grid>
      <Grid xs={8}></Grid>
    </Grid>
  );
}

export default MyPage;
