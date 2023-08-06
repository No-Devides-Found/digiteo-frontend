import React from "react";

import { EventCarousel, PlayGroundCarousel } from "../../components";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import stars from "../../assets/Home/stars.svg";

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
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #1A237E, #FFFDE700)",
          width: "100%",
          height: "30rem", // 임시!
          py: "6rem",
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
      </Box>
    </div>
  );
}

export default Home;
