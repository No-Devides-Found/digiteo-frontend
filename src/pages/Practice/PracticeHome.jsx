import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {Box, Grid, Typography, Button, Stack, Container,} from "@mui/material";
import { styled } from "@mui/material/styles";





const MainGrid = styled(Grid)({
  width:"100%",
  height:"70%",
  margin:"5rem auto",
  backgroundColor: "#FFF5E5",
})
const RightGrid = styled(Grid)({
  backgroundColor: "white",
  height: "20rem",
})
const StyledButton = styled(Button)({

})
const StyledContent = styled(Typography)({
  fontSize:"0.8rem",
  lineHeight:"2rem",
  fontFamily:"Kumbh Sans"

})
const TitleTypography = styled(Typography)({
  backgroundColor:'#FF8A65',
  width: 'fit-content',
  padding: '1rem',
  textAlign: 'center',
})


function PracticeHome () {
  const navigate = useNavigate();

  const onClick=(e)=>{
    navigate(`/practicelist?param1=${e.target.value}`);   
  }

  //해당 창작물 페이지로 이동
  return(
    <Box>
      <MainGrid container spacing={1}>
        <Grid item xs={5}>
          <Grid container spacing={1} style={{}}>
            <Grid item xs={12}>
              <Typography variant="h4" fontFamily={"Krona One"} 
                style={{backgroundColor:"#FF8A65", width:"40%", padding:"1rem"}}
              >
                CHANG <br/>
                JAC <br/>
                MA <br/>
                ROO <br/>
              </Typography>
            </Grid>
                        
            <Grid item xs={12} style={{fontFamily:"Kumbh Sans", fontSize:"8"}}>
            <StyledContent variant="subtitle1"> 
              <strong>창작마루</strong>(실습)란?<br/>
              <strong>디지털 놀이터</strong>(학습)에 1개 이상의 프로그램을 듣고<br/>
              <strong>본인이 원하는 형태의 디지털 콘텐츠를 제작하여 <br/>
              공유할 수 있는 커뮤니티</strong>입니다. <br/>
              놀이터 프로그램들은 마지막에 과제 제출 시 가이드라인과 <br/>
              예시가 주어지지만 창작마루에는 본인이 학습한<br/>
              프로그램들을 참고해 창작물을 생성하고 공유한다는 <br/>
              점에서 차이가 있습니다. <br/>
              이러한 활동을 통해 디지털 리터러시 역량 증진을 위한 <br/>
              자기주도적 학습을 유도.
            </StyledContent>
                  

         {/* 
                   <div style={{backgroundColor:"#A1887F", width:"100%", height:"100%", position:"relative",
        margin:"0 auto"}}>
            <div style={{backgroundColor:"#DCEDC8", width:"80%", height:"80%", position:"relative",
          margin:"0 auto", verticalAlign:"middle"}}>
              box
            </div>
          </div>
         
         */}
                  
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} >
          <Grid container spacing={1} style={{backgroundColor:"#A1887F", 
           position:"relative",width:"90%", height:"90%", margin:"0 auto"}}>
            <Grid container style={{backgroundColor:"#DCEDC8", position:"relative", margin:"2rem"}}>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6}>
                
              </Grid>
              <Grid item xs={6}>
                
              </Grid>
              <Grid item xs={6}>
                
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </MainGrid>

      
      <Grid container style={{ padding:"1rem 10rem"}}>
        <Grid item xs >
          <Stack style={{backgroundColor: '#FF8A65', minWidth:'45%', padding:"1rem"}}>
            <Typography variant="h4" fontFamily={"Krona One"} >CHANG</Typography>
            <Typography variant="h4" fontFamily={"Krona One"} >JAC</Typography>
            <Typography variant="h4" fontFamily={"Krona One"} >MA</Typography>
            <Typography variant="h4" fontFamily={"Krona One"} >ROO</Typography>
          </Stack>
          
          <Typography variant="subtitle1"> 
            창작마루(실습)란?<br/>
            디지털 놀이터(학습)에 1개 이상의 프로그램을 듣고<br/>
            <strong>본인이 원하는 형태의 디지털 콘텐츠를 제작하여 </strong><br/>
            공유할 수 있는 커뮤니티입니다. <br/>
            놀이터 프로그램들은 마지막에 과제 제출 시 가이드라인과 <br/>
            예시가 주어지지만 창작마루에는 본인이 학습한<br/>
            프로그램들을 참고해 창작물을 생성하고 공유한다는 <br/>
            점에서 차이가 있습니다. <br/>
            이러한 활동을 통해 디지털 리터러시 역량 증진을 위한 <br/>
            자기주도적 학습을 유도.
          </Typography>
        </Grid>

        <Grid item xs>
            <StyledButton 
            value="video" 
            onClick={onClick} 
            variant="contained">
                영상창작물
            </StyledButton>


            <StyledButton 
            value="img" 
            onClick={onClick} 
            variant="contained">
                이미지창작물
            </StyledButton>

            <StyledButton 
            value="voice"
            onClick={onClick}  
            variant="contained" >
                음성창작물
            </StyledButton>
            

            <StyledButton 
                value="text" 
                onClick={onClick} 
                variant="contained" >
                문서창작물
            </StyledButton>
      </Grid>    
    </Grid> 

    
  </Box>
  );
};

export default PracticeHome;  