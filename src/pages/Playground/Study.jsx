import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


// 유저 학습 페이지 
// 학습 프로그램 클릭 -> 클릭한 유저의 정보, 학습 프로그램의 정보가 들어옴
// 학습 프로그램 정보: 총 학습물 페이지 수, 유형(이미지, 영상, ) 마지막 고정 - 
// 유저 학습 정보: 학습 현황, 학습 제출 과제물, 
export default function Study({user, program}) {
  const [progress, setProgress] = React.useState() ; //유저 학습 현황 

  const [files, setFiles] = React.useState([]);  //유저 제출 과제물


  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);  //현재 스텝 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}  //5스텝
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth:"100%", }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
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
  );
}
