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
    attendRank && (
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
              {attendRank.map((item, idx) => {
                const _item = {
                  id: item.id,
                  image: item.thumbnail,
                  alt: item.title,
                  title: item.title,
                  info: item.introduce,
                  participants: item.participants_cnt,
                  rating: item.score ? item.score : 0,
                };
                return (
                  <React.Fragment key={idx}>
                    <Program {..._item} />
                  </React.Fragment>
                );
              })}
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
              {attendRank.map((item, idx) => {
                const _item = {
                  id: item.id,
                  image: item.thumbnail,
                  alt: item.title,
                  title: item.title,
                  info: item.introduce,
                  participants: item.participants_cnt,
                  rating: item.score ? item.score : 0,
                };
                return (
                  <React.Fragment key={idx}>
                    <Program {..._item} />
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
        </Container>
        <RankingBanner />
        <RelatedSiteCarousel />
      </>
    )
  );
}

export default Home;
