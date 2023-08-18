import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { DragUploadFile } from '../../components';



// 진행도 바
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: '20px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#FFE0B2',
    //theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '20px',
    backgroundColor: '#FFA000',
    //theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const TitleTypography=styled(Typography)({
  backgroundColor:"#E0F7FA", 
  padding:"1rem 1rem 1rem 1rem", 
  borderRadius:"30px",
  width: "100%",
  margin:"0 auto",
  textAlign:"center",

})
//스텝별 학습 콘텐츠 담을 컨테이너
const StyledContainer=styled(Container)({
  display:"flex", 
  justifyContent:"center"
  
})


const answerButton=styled(Button)({
  backgroundColor:"red",

})
// 프로그램 스텝별 프로그램 정보  (제목, 순서, 타입, 이미지(-무조건 / 파일) )
const steps = [
  {
    label: '콘텐츠 제목입니다.',
    type: "content",
    files: "img/video.png", 
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    type: "content",
    files: "img/video.png", 
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    type: "content",
    files: "img/video.png", 
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: '아직 멀엇음',
    type: "content",
    files: "img/video.png", 
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'QUIZ TIME',
    type: "quiz",
    answer: 1 ,  // 퀴즈 답
    files:  "img/video.png", 
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: '과제 제출',
    type: "assignment",
    files: "img/video.png", 
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const SubmitButton=styled(Button)({
  backgroundColor:"#C5E1A5",
  color:"black",
  fontWeight:"bold",
  width:"20%"
  ,borderRadius:"20px",
  padding:"0.5rem"
})

export default function Study() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0); //현재 스텝 정보
  const maxSteps = steps.length ;    // 총 스텝 개수
  const [progress, setProgress] = React.useState(0);  //학습현황
  
  const [files, setFiles]= React.useState([]);    //과제 제출

  // 퀴즈 선택한 답 
  const [selectAnswer, setSelectAnswer] = React.useState(1);    //유저는 int1,2로 답한다.

  //퀴즈 답 테스트 퀴즈 답은 o == 1 ,x ==2, string일지 int일지 모름
  const testAnswer=()=>{
    //맞았다.
    console.log(selectAnswer);
    
    if (selectAnswer === steps[activeStep].answer){
      console.log(selectAnswer);
      console.log("맞았다.")
    }
    //틀렸다.
    else{
      console.log(selectAnswer);
      console.log("틀렸다.")
    }
  }

  // 다음 페이지로 이동 
  const handleNext = () => {
    console.log(activeStep)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const currentProgress = (activeStep +1) *(100/maxSteps); 
    console.log(currentProgress)
    setProgress(currentProgress); // 학습 퍼센트 바 증가
    console.log("here", progress)
    if(progress === 100){
      console.log("here")
    }
  };

  const handleBack = () => {
    console.log(activeStep)
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const currentProgress = (activeStep -1) * (100/maxSteps); 
    console.log(currentProgress)
    setProgress(currentProgress); // 학습 퍼센트 바 증가
   
  };



  
  //과제 제출
  const submitAssignment = () =>{

  }

  return (
    <Box sx={{width:"70%", margin:"0 auto"}}>
      여기여기 {progress}
      <Grid container>
        <Grid item xs={12} mt={2}>
          <BorderLinearProgress variant="determinate" value= {progress} />
        </Grid>
        <Grid item xs={12} mt={3} >
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 'fit-content',
            
            bgcolor: 'background.default',
          }}
        >
          <TitleTypography variant='h5' fontWeight="bold" >
            {steps[activeStep].label}
          </TitleTypography>
        </Paper>
        </Grid>

      </Grid>
      
      
      <Box sx={{ width: '100%', p: 2 }}>
        {steps[activeStep].description}

        {/* {
        !steps[activeStep].files 
        ? console.log("없다") 
        : <div style={{display:"flex", justifyContent:"center"}}>
          <img src={steps[activeStep].files}  alt="here"/>
          </div>
        } */}
        { 
          steps[activeStep].type === "quiz"
          ? 
            <Grid container>
              {/* 퀴즈 */}
              <Grid item xs={12} style={{justifyContent:"center", display:'flex'}}> 
              <img src={steps[activeStep].files}  alt="here"/>
              </Grid>
              <Grid item xs={12} mt={2}>
              <Button style={{width:"50%" , backgroundColor:"#FFCDD2", color:"#FF0000", fontSize:"5rem", fontWeight:"heavy"}} 
              onClick={() => {
                setSelectAnswer(1);  //선택 답 테스트
                testAnswer();//선택 답 테스트
                }}
              >
                 O 
              </Button>
              <Button style={{width:"50%" , backgroundColor:"#C1D6FF", color:"#0056FD", fontSize:"5rem", fontWeight:"heavy"}} 
              onClick={() => {
                setSelectAnswer(2);  
                testAnswer();//선택 답 테스트
                }}
              > 
                X 
              </Button>
              </Grid>
              
            </Grid>


          : (
            steps[activeStep].type === "assignment"
            ? 
            // 과제
            <Grid container >
              
              <Grid item xs={12} mt={3} >
                <Typography ml={3} mb={1} variant="h6">파일 업로드</Typography>
                <DragUploadFile files={files} setFiles={setFiles} /> 
              </Grid>
              <Grid item xs={12} mt={3} style={{display:"flex", justifyContent: "center", textAlign:"center"}}>
              <SubmitButton 
              onClick={() => {
                setProgress((activeStep +1) *(100/maxSteps));  //진행바 업데이트
                submitAssignment();  // 과제 제출
                }}
              > 
                과제제출  
              </SubmitButton>
              </Grid>
              <Grid item xs={12} mt={5}>
              <hr/>
              </Grid>
              <Grid item xs={12} mt={4} style={{display:"flex", justifyContent: "center"}}>
              <img src={steps[activeStep].files}   alt="here"/>
              </Grid>
              
              
            </Grid>
            : 

            <StyledContainer>
              {/* 그냥 학습 콘텐츠 */}
               <img src={steps[activeStep].files}  alt="here"/>
               
            </StyledContainer>
          )
        }

      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps -1}
          >
            다음
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            이전
          </Button>
        }
      />
    </Box>
  );
}

