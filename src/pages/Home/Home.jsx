import React, { useEffect } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import {
  Footer,
  PlayGroundCarousel,
  Program,
  RankingBanner,
  RelatedSiteCarousel,
} from "../../components";

import Api from "../../api/api";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";

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
  const [curUser, setCurUser] = useRecoilState(userState);

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await Api.get("/accounts/dj-rest-auth/user");
      console.log(data);
      setCurUser(data);
    };

    // getUserInfo();
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
      <Footer />
    </>
  );
}

export default Home;
