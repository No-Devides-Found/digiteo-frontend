// Signup.jsx
import React, { useState } from "react";
import Axios from "axios";
import moment from "moment";
import { server } from "../../constants";
import { Grid, Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import "./Signup.css";
import Step1Content from "./Step1";
import Step2Content from "./Step2";
import Step3Content from "./Step3";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";

//총 3스텝
const steps = ["", "", ""];

const Signup = () => {
  // 유저 정보 상태 관리
  const [curUser, setCurUser] = useRecoilState(userState);

  // 스텝 상태 관리 세팅
  const [step1Clear, setStep1Clear] = useState(false);
  const [step2Clear, setStep2Clear] = useState(false);
  // const [stepClear, setStep1Clear] = useState(false);

  // 상태 관리 초기값 세팅 - 닉네임, 이메일, 비밀번호, 비밀번호 재확인, 생년월일, 회원유형, 학년
  // 하위 컴포넌트에서 입력받을 회원가입 정보
  const [nickname, setNickname] = useState(""); //닉네임 (필수)
  const [email, setEmail] = useState(""); //이메일 (필수)
  const [password, setPassword] = useState(""); //비밀번호 (필수)
  const [password2, setPassword2] = useState(""); //비밀번호 재확인 (필수)

  const date = new Date(Date.now());
  const [year, setYear] = useState(String(date.getFullYear())); //년도 (필수)
  const [month, setMonth] = useState(String(date.getMonth()).padStart(2, "0")); //월 (필수)
  const [day, setDay] = useState(String(date.getDate()).padStart(2, "0")); //일 (필수)

  const [identity, setIdentity] = useState("none"); //회원유형 (필수)
  const [grade, setGrade] = useState("0"); //학년 (필수)
  const [school, setSchool] = useState(""); //소속 (선택)

  //오류 메세지 전달을 위한 상태값 세팅
  const [nicknameMessage, setNicknameMessage] = useState(""); //닉네임 (필수)
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [password2Message, setPassword2Message] = useState("");

  const [gradeMessage, setGradeMessage] = useState("");

  //유효성 검사 세팅
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPassword2, setIsPassword2] = useState(false);

  const [isIdentity, setIsIdentity] = useState(false);
  const [isGrade, setIsGrade] = useState(false);

  // 회원가입 완료 - 제출
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

    console.log(user);

    // 회원가입
    Axios.post(`${server}/accounts/dj-rest-auth/registration`, user)
      .then((res) => {
        console.log(res);
        if (res.data.access) {
          // localStorage.clear();
          // 로컬스토리지에 access_token과 만료기한 저장
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem(
            "access_expiration",
            moment().add(30, "minute").format("yyyy-MM-DD HH:mm:ss")
          );
          // 유저 정보 가져오기
          setCurUser(res.data.user);
          // 홈으로 이동
          window.location.replace("/");
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
            step1Clear={step1Clear}
            setStep1Clear={setStep1Clear}
            nickname={nickname}
            setNickname={setNickname}
            nicknameMessage={nicknameMessage}
            setNicknameMessage={setNicknameMessage}
            isNickname={isNickname}
            setIsNickname={setIsNickname}
            email={email}
            setEmail={setEmail}
            emailMessage={emailMessage}
            setEmailMessage={setEmailMessage}
            isEmail={isEmail}
            setIsEmail={setIsEmail}
            password={password}
            setPassword={setPassword}
            passwordMessage={passwordMessage}
            setPasswordMessage={setPasswordMessage}
            isPassword={isPassword}
            setIsPassword={setIsPassword}
            password2={password2}
            setPassword2={setPassword2}
            password2Message={password2Message}
            setPassword2Message={setPassword2Message}
            isPassword2={isPassword2}
            setIsPassword2={setIsPassword2}
          />
        );
      case 1:
        return (
          <Step2Content
            step2Clear={step2Clear}
            setStep2Clear={setStep2Clear}
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
            identity={identity}
            setIdentity={setIdentity}
            isIdentity={isIdentity}
            setIsIdentity={setIsIdentity}
            grade={grade}
            setGrade={setGrade}
            gradeMessage={gradeMessage}
            setGradeMessage={setGradeMessage}
            isGrade={isGrade}
            setIsGrade={setIsGrade}
            school={school}
            setSchool={setSchool}
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
  const handleNext = (step) => {
    if (
      (!step1Clear && activeStep === 0) ||
      (!step2Clear && activeStep === 1)
    ) {
      alert("필수값을 입력해주세요");
    } else {
      let newSkipped = new Set(skipped); //newSkipped === skipped set객체

      //현재 step이 skipped 세트(집합)에 포함되는지 확인(이전에 스킵되었는지 확인하는 것)
      if (isStepSkipped(activeStep)) {
        newSkipped.delete(activeStep);
      }

      // "완료" 버튼이 클릭되었는지 확인 (마지막 단계인 경우)
      if (activeStep === steps.length - 1) {
        onSubmit(); // onSubmit 함수 호출
      }

      //다음으로 가게 됨
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
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
            {/* <div className="testing">
              <div>
                부모로 오는지 테스트
                <div>닉네임 : {nickname}</div>
                <div>이메일 : {email} / 이메일 유효: {isEmail}</div> 
                <div>비밀번호 : {password} / 이메일 유효:{isPassword} </div> 
                <div>비밀번호 재확인 : {password2} / 이메일 유효{isPassword2}</div>  
                <div>년 : {year}</div>
                <div>월 : {month}</div>
                <div>일 : {day}</div>
                <div>회원유형 : {identity}</div>
                <div>학년 : {grade}</div>
                <div>소속 : {school}</div>
              </div>
            </div> */}

            {/* 스텝 */}
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
