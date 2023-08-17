import React, { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import {
  PlayGroundCarousel,
  Program,
  RankingBanner,
  RelatedSiteCarousel,
} from "../../components";

import axios from "axios";
import { server } from "../../constants";

//프로그램 컴포넌트 테스트
const programProps = {
  image: "/asset/thumbnail.jpg",
  alt: "썸네일 이미지",
  title: "프로그램 대제목",
  info: "프로그램 설명",
  participants: "참여 인원",
  rating: "2.5",
};

function Home() {
  const [attendRank, setAttendRank] = useState();

  useEffect(() => {
    // 프로그램 랭킹 가져오기
    const getAttendRank = async () => {
      await axios.get(`${server}/programs/attend_rank/`).then((res) => {
        setAttendRank(res.data);
      });
    };
    getAttendRank();
  }, []);

  return (
    <>
      {/* <EventCarousel /> */}
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
            <Program {...programProps} />
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
            <Program {...programProps} />
          </Grid>
        </Box>
      </Container>
      <RankingBanner />
      <RelatedSiteCarousel />
    </>
  );
}

export default Home;
