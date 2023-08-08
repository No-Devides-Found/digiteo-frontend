import React from 'react';
import {Box, Grid, Typography, Button, Stack} from "@mui/material";
import { styled } from "@mui/material/styles";


const MainBox = styled(Box)({
  margin: "5rem 10rem",
  height: "30rem",
  borderRadius: "2rem",
  padding: "3rem",
  backgroundColor: "#FFB74D",
})
const RightGrid = styled(Grid)({
  backgroundColor: "white",
  height: "20rem",
})
const StyledButton = styled(Button)({
  height: "5rem",
  width: "8rem",
  margin: "0.5rem",
})



function PracticeMain() {
  return (
    <MainBox>
      <Grid container>
        <Grid item xs> 
        <Typography variant="h3" mt={2}>창작마루</Typography>
        <Typography>창작마루 설명입니다.</Typography>
        </Grid>
        <RightGrid item xs>
          <Grid container>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton variant="contained" href="/">
                  영상창작물
                </StyledButton>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton variant="contained" href="#contained-buttons">
                  이미지창작물
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton variant="contained" href="#contained-buttons">
                  음성창작물
                </StyledButton>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton variant="contained" href="#contained-buttons">
                  문서창작물
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </RightGrid>
      </Grid>
    </MainBox>
  );
};

export default PracticeMain;