import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";

function PlayGroundCarousel() {
  const contents = [0, 1, 2, 3, 4];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #FFFDE7 0%, rgba(255, 253, 231, 0.00) 100%)",
        padding: "4rem 0",
      }}
    >
      <Container>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            fontFamily={"Krona One"}
            zIndex={1}
            position={"relative"}
          >
            DIGITAL PLAYGROUND
          </Typography>
          <Ellipse
            width={"32rem"}
            height={"1.2rem"}
            background={"#ADF0FF"}
            sx={{ position: "absolute", top: "1.7rem" }}
          />
        </Box>
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="slide"
          height={"22rem"}
          indicatorContainerProps={{
            style: { display: "none" },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              color: "#64DD17",
            },
          }}
        >
          {contents.map((item, idx) => {
            return <Item item={item} key={idx} />;
          })}
        </Carousel>
      </Container>
    </Box>
  );
}

export default PlayGroundCarousel;

const Item = ({ item }) => {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12rem",
        }}
      >
        {item}
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Ellipse
          width={"40rem"}
          height={"6rem"}
          background={"#4CAF50"}
          boxShadow
          zIndex={1}
        />
        <Ellipse
          width={"40rem"}
          height={"6rem"}
          background={"rgba(0, 0, 0, 0.20)"}
          boxShadow
          sx={{ position: "absolute", top: "3rem" }}
        />
      </Box>
    </Container>
  );
};

const Ellipse = styled(Box)(
  ({ width, height, background, boxShadow, zIndex }) => ({
    boxSizing: "border-box",
    width: width,
    height: height,
    borderRadius: "100%",
    background: background,
    boxShadow: boxShadow ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : "",
    zIndex: zIndex,
  })
);
