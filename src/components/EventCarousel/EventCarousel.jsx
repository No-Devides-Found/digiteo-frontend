import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";

import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)({
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
});

const Item = ({ item }) => {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container alignItems={"center"} sx={{ height: "100%" }}>
        <StyledGrid xs={6}>
          <Typography variant="body1">{item.desc}</Typography>
        </StyledGrid>
        <StyledGrid xs={6}>
          <Box
            component="img"
            src={item.img}
            alt="홍보이미지"
            sx={{
              height: "80%",
              width: "100%",
              backgroundColor: "#D9CFBE",
              borderRadius: "1.25rem",
            }}
          />
        </StyledGrid>
      </Grid>
    </Container>
  );
};

function EventCarousel() {
  const contents = [
    {
      img: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt, fuga aperiam saepe tempora, aspernatur consequuntur tenetur officia molestiae, dolore ex? In, pariatur. Eum laboriosam, odit nulla ex ducimus error.",
    },
    {
      img: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt, fuga aperiam saepe tempora, aspernatur consequuntur tenetur officia molestiae, dolore ex? In, pariatur. Eum laboriosam, odit nulla ex ducimus error.",
    },
    {
      img: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt, fuga aperiam saepe tempora, aspernatur consequuntur tenetur officia molestiae, dolore ex? In, pariatur. Eum laboriosam, odit nulla ex ducimus error.",
    },
    {
      img: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt, fuga aperiam saepe tempora, aspernatur consequuntur tenetur officia molestiae, dolore ex? In, pariatur. Eum laboriosam, odit nulla ex ducimus error.",
    },
  ];

  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon color="primary" />}
      PrevIcon={<ArrowBackIosNewIcon color="primary" />}
      cycleNavigation={true}
      navButtonsAlwaysVisible={true}
      autoPlay={true}
      animation="slide"
      height={"20rem"}
      navButtonsAlwaysInvisible={true}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#FFA000",
          backgroundColor: "#FFA000",
        },
      }}
      sx={{ backgroundColor: "#FFF3E0" }}
    >
      {contents.map((item) => {
        return <Item item={item} />;
      })}
    </Carousel>
  );
}

export default EventCarousel;
