import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {Box, Grid, Typography, Button,} from "@mui/material";
import { styled } from "@mui/material/styles";


const MainGrid = styled(Grid)({
  width:"100%",
  height:"70%",
  margin:"5rem auto",
  backgroundColor: "#FFF5E5",
});

const StyledContent = styled(Typography)({
  fontSize:"0.8rem",
  lineHeight:"2rem",
  fontFamily:"Kumbh Sans"

});

function PracticeHome () {
  const navigate = useNavigate();

  //프로그램 유형 버튼 클릭 
  //-> 유형(value) 전달하면서 창작마루 목록으로 이동
  const onClick=(e)=>{
    navigate(`/practicelist?param1=${e.target.value}`);   
  }

  //해당 창작물 페이지로 이동
  return(
    <Box>
      <MainGrid container spacing={1}>
        <Grid item xs={5}>
          {/* 창작마루 좌측 타이틀 - 내용 */}
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

        {/* 창작마루 우측 - 유형 버튼 */}
        <Grid item xs={7} >
          <Grid container spacing={1} style={{backgroundColor:"#A1887F", 
           position:"relative",width:"90%", height:"90%", margin:"0 auto"}}>
            <Grid container style={{backgroundColor:"#DCEDC8", position:"relative", margin:"2rem"}}>
              <Grid item xs={6}>
                <Button 
                value="video" 
                onClick={onClick} 
                variant="contained">
                    영상창작물
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button 
                value="img" 
                onClick={onClick} 
                variant="contained">
                    이미지 창작물
                </Button>
                
              </Grid>
              <Grid item xs={6}>
                <Button 
                value="voice" 
                onClick={onClick} 
                variant="contained">
                    음성 창작물
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button 
                value="text" 
                onClick={onClick} 
                variant="contained">
                    문서 창작물
                </Button>
                
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </MainGrid>

    
    
  </Box>
  );
};

export default PracticeHome;  