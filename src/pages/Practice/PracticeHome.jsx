import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {Box, Grid, Typography, Button, Stack} from "@mui/material";
import { styled } from "@mui/material/styles";


const MainBox = styled(Box)({
  // position: 'fixed',
  display:'block',
  width: '60rem',
  margin: "5rem auto",
  height: "30rem",
  borderRadius: "2rem",
  padding: "3rem",
  backgroundColor: "#FFF5E5",
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
const TitleTypography = styled(Typography)({
  backgroundColor:'#FF8A65',
  width: 'fit-content',
  padding: '1rem',
  textAlign: 'center',
})


const PracticeHome = () => {
  const navigate = useNavigate();

  const onClick=(e)=>{
    navigate(`/practicelist?param1=${e.target.value}`);   
  }

  //해당 창작물 페이지로 이동
  return(
      <MainBox>
      <Grid container>
        <Grid item xs> 
        <TitleTypography variant="h3" mt={2}>창작마루</TitleTypography>
        <Typography>창작마루 설명입니다.</Typography>
        </Grid>
        <RightGrid item xs>
          <Grid container>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton value="video" onClick={onClick} variant="contained">
                  영상창작물
                </StyledButton>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton value="img" onClick={onClick} variant="contained">
                  이미지창작물
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton value="voice"onClick={onClick}  variant="contained" >
                  음성창작물
                </StyledButton>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <StyledButton value="text" onClick={onClick} variant="contained" >
                  문서창작물
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </RightGrid>
      </Grid>
    </MainBox>
  ); 
}

export default PracticeHome;