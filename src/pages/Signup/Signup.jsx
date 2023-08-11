// Signup.jsx
import React, { useState } from "react";
import Axios from "axios";
import { Grid, Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import "./Signup.css";
import Step1Content from "./Step1";
import Step2Content from "./Step2";
import Step3Content from "./Step3";

//총 3스텝
const steps = ["", "", ""];

const Signup = () => {
  // 하위 컴포넌트에서 입력받을 회원가입 정보
  const [nickname, setNickname] = useState(""); //닉네임
  const [email, setEmail] = useState(""); //이메일
  const [password, setPassword] = useState(""); //비밀번호
  const [password2, setPassword2] = useState(""); //비밀번호 재확인

  const date = new Date(Date.now());
  const [year, setYear] = useState(String(date.getFullYear())); //년도
  const [month, setMonth] = useState(String(date.getMonth()).padStart(2, "0")); //월
  const [day, setDay] = useState(String(date.getDate()).padStart(2, "0")); //일

  const [identity, setIdentity] = useState("none"); //회원유형
  const [grade, setGrade] = useState("0");
  const [school, setSchool] = useState(""); //소속

  //required 입력사항 검사
  const checkPage = () => {
    console.log("check password");
    if (activeStep === 0) {
      if (nickname === "" || email === "" || password === "") {
        alert("필수값을 입력해주세요.");
        handleBack();
      }
    }
    // if((password!=="" && password2==="" ) || password !== password2){
    //   alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
    //   handleBack();
    // }else if(password === ""){
    //   alert("비밀번호를 입력해주세요.")
    //   handleBack();

    // }else if(nickname ==="" || email===""){
    //   alert("필수값을 입력해주세요.")
    //   handleBack();
    // }
  };

  const onSubmit = () => {
    console.log("submit");

    const user = {
      email: email,
      password1: password,
      password2: password2,
      profile: {
        nickname: nickname,
        birth: `${year}-${month}-${day}`,
        job: identity,
        grade: grade,
        department: school,
      },
    };

    Axios.post("/accounts/dj-rest-auth/registration", user)
      .then((res) => {
        console.log(res);
        if (res.data.key) {
          localStorage.clear();
          localStorage.setItem("token", res.data.key);
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          //window.location.replace('/')
        } else {
          setNickname("");
          setEmail("");
          setPassword("");
          setPassword2("");
          setYear("");
          setMonth("");
          setDay("");
          setIdentity("");
          setGrade("");
          setSchool("");
          localStorage.clear();
          // setErrors(true)
        }
      })
      .catch((err) => {
        console.log(err);
        // console.clear();
      });
  };

  //stepper 관련
  const [activeStep, setActiveStep] = useState(0); //현재 step state 변수
  const [skipped, setSkipped] = useState(new Set()); //new Set() 집합 객체 생성(중복값 허용x)

  // 하위 컴포넌트 변경하는 함수
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Step1Content
            nickname={nickname}
            setNickname={setNickname}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            password2={password2}
            setPassword2={setPassword2}
          />
        );
      case 1:
        return (
          <Step2Content
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
            identity={identity}
            setIdentity={setIdentity}
            school={school}
            setSchool={setSchool}
            grade={grade}
            setGrade={setGrade}
          />
        );
      case 2:
        return <Step3Content />;
      default:
        return null;
    }
  };

  // skipped set 객체에 해당 step이 존재하는지 판별하는 함수
  const isStepSkipped = (step) => {
    return skipped.has(step); //has() Set 객체에 주어진 요소가 존재하는지 여부 판별
  };

  // 다음 스텝으로 넘어가는 함수
  const handleNext = () => {
    let newSkipped = new Set(skipped); //newSkipped === skipped set객체

    //현재 step이 skipped 세트(집합)에 포함되는지 확인(이전에 스킵되었는지 확인하는 것)

    if (isStepSkipped(activeStep)) {
      // newSkipped = new Set(newSkipped.values()); //skipped 세트의 복사본을 만들어 newSkipped 변수에 할당
      // newSkipped.delete(activeStep);
      newSkipped.deleete(activeStep);
    }
    if (activeStep === 0) {
      checkPage();
    }
    // "완료" 버튼이 클릭되었는지 확인 (마지막 단계인 경우)
    if (activeStep === steps.length - 1) {
      onSubmit(); // onSubmit 함수 호출
    }

    //현재 step 값
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  //뒤로 가기
  const handleBack = () => {
    if (activeStep === 0) {
      return false;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // 회원가입 완료 후 시작하기 - 일단 메인 홈페이지로
  const handleStart = () => {
    // setActiveStep(0);
    window.location.replace("/"); // App.js에서 /로 라우팅 필요
  };

  return (
    <Grid className="signupWrap">
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <div sx={{ mt: 2, mb: 1 }}>
              디지털 세상 속의 놀이터, 디지터에 가입해주셔서 감사합니다 <br />{" "}
              이제부터 디지터에서 함께 놀아봐요 !
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleStart}>시작하기</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="testing">
              <div>
                <div>닉네임 : {nickname}</div>
                <div>이메일 : {email}</div>
                <div>비밀번호 : {password}</div>
                <div>년 : {year}</div>
                <div>월 : {month}</div>
                <div>일 : {day}</div>
                <div>회원유형 : {identity}</div>
                <div>학년 : {grade}</div>
                <div>소속 : {school}</div>
              </div>
            </div>

            {/* 여기 스텝 */}
            {renderStepContent(activeStep)}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep.label === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                이전
              </Button>
              <Box sx={{ flex: "2 2 auto" }} />

              <Button type="submit" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "완료" : "다음"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Grid>
  );
};

export default Signup;
