import React from "react";
import stars from "../../../assets/Home/stars.svg";
import { Box, Typography, Grid } from "@mui/material";
import RankingCard from "./RankingCard";

function RankingBanner() {
  // 임시
  const rankingData = [
    {
      rank: 1,
      thumbnail: "",
      title: "This is title",
      nickname: "author",
      likes: 400,
    },
    {
      rank: 2,
      thumbnail: "",
      title: "This is title",
      nickname: "author",
      likes: 300,
    },
    {
      rank: 3,
      thumbnail: "",
      title: "This is title",
      nickname: "author",
      likes: 200,
    },
    {
      rank: 4,
      thumbnail: "",
      title: "This is title",
      nickname: "author",
      likes: 100,
    },
  ];
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #1A237E, #FFFDE700)",
        width: "100%",
        pt: "6rem",
        mb: "4rem",
      }}
      position={"relative"}
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

      {/* TODO: 애니메이션 추가 */}
      <Box
        component={"img"}
        src={stars}
        sx={{ position: "absolute", top: "4rem" }}
        width={"100%"}
      />

      <Grid container>
        {rankingData.map((data, idx) => {
          return (
            <React.Fragment key={idx}>
              <Grid
                item
                xs={3}
                minWidth={"300px"}
                maxWidth={"500px"}
                margin={"auto"}
              >
                <RankingCard
                  title="title"
                  desc="desc"
                  width="100%"
                  height="100%"
                  data={data}
                />
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
}

export default RankingBanner;
