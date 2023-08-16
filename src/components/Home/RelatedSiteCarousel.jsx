import React from "react";
import { Box, Container, Typography, Grid, Card, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
  backgroundColor: "#D9D9D9",

  // 임시
  fontFamily: "Krona One",
}));

export function RelatedSiteCarousel() {
  const contents = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const itemLength = contents.length > 5 ? 5 : contents.length;
  const items = [];

  for (let i = 0; i < contents.length; i += itemLength) {
    if (i % itemLength === 0) {
      items.push(
        <Grid
          key={contents[i]}
          container
          spacing={0}
          className="BannerGrid"
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          {contents.slice(i, i + itemLength).map((data, index) => {
            return (
              <React.Fragment key={data}>
                <Grid item xs={2} height={60}>
                  <Item elevation={0}>
                    {/* {data} */}
                    DIGITEO
                  </Item>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      );
    }
  }

  return (
    <Box marginTop={"12rem"}>
      <Container>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="span"
            textAlign={"center"}
            fontFamily={"Krona One"}
          >
            관련사이트
          </Typography>
        </Box>
        <Carousel
          NextIcon={<ArrowCircleRightRoundedIcon />}
          PrevIcon={<ArrowCircleLeftRoundedIcon />}
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="fade"
          indicatorContainerProps={{
            style: { display: "none" },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              color: "#000",
            },
          }}
          height={"10rem"}
        >
          {items}
        </Carousel>
      </Container>
    </Box>
  );
}

export default RelatedSiteCarousel;
