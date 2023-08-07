import React from "react";

import { Box,Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import stars from "../../assets/Home/stars.svg";
import rocket from "../../assets/Home/rocket.svg";
import { EventCarousel, PlayGroundCarousel } from "../../components";
import Program from "../../components/Program/Program"; 


//프로그램 컴포넌트 테스트
const programProps = {
  image: "/asset/thumbnail.jpg",
  alt: "썸네일 이미지",
  title: "프로그램 대제목",
  info: "프로그램 설명",
  button1: "참여 인원",
  button2: "별점"
};


function Home() {
  return (
    <div>
      홈페이지
      <EventCarousel />

      <PlayGroundCarousel />
      <Container sx={{ pb: "4rem" }}>
        <Box sx={{ mb: "1rem" }}>
          <Typography variant="h5" component="span">
            인기 프로그램{" "}
          </Typography>
          <Typography
            variant="h5"
            component="span"
            fontFamily={"krona one"}
            color={"#FF5722"}
          >
            TOP 5
          </Typography>
          
          <Grid>
            <Program {...programProps}/>
          </Grid>
          
        </Box>
      </Container>
      <Container sx={{ pb: "4rem" }}>
        <Box sx={{ mb: "1rem" }}>
          <Typography
            variant="subtitle1"
            component="h5"
            fontFamily={"krona one"}
            color={"#FF5722"}
          >
            NEW+
          </Typography>
          <Typography variant="h5" component="span">
            신규 업데이트 프로그램
          </Typography>
          <Grid>
            <Program {...programProps}/>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #1A237E, #FFFDE700)",
          width: "100%",
          pt: "6rem",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontFamily={"Krona One"}
          zIndex={1}
          position={"relative"}
          color={"white"}
        >
          RANKING
        </Typography>
        <Box
          component={"img"}
          src={stars}
          sx={{ position: "absolute", top: "4rem" }}
        />
        <Box component={"img"} src={rocket} sx={{ width: "20%", mt: "4rem" }} />
        {/* <Box component={"img"} src={rocket} sx={{ width: "20%" }} />
        <Box component={"img"} src={rocket} sx={{ width: "20%" }} />
        <Box component={"img"} src={rocket} sx={{ width: "20%" }} />
        <Box component={"img"} src={rocket} sx={{ width: "20%" }} /> */}
      </Box>
    </div>
  );
}

export default Home;
