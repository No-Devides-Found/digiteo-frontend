import React, {useEffect, useState} from "react";
import {Container} from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export const Step1Content = ({
  step1Clear, setStep1Clear,
  nickname, setNickname, nicknameMessage, setNicknameMessage, isNickname, setIsNickname,
  email, setEmail, emailMessage, setEmailMessage, isEmail, setIsEmail,
  password, setPassword, passwordMessage, setPasswordMessage, isPassword, setIsPassword,
  password2, setPassword2, password2Message, setPassword2Message, isPassword2, setIsPassword2,
}) => {

  
  useEffect(() => {
    const nicknameAlert = document.getElementById("nicknameAlert");

    if(isNickname&&isEmail&&isPassword&&isPassword2){
      nicknameAlert.style.display='none';
      setStep1Clear(true);
      console.log('다 확인됨', step1Clear);
    } else{
      setStep1Clear(false);
      console.log('아직 다음 스텝 안돼요', step1Clear);
      

      if(!isNickname &&(isEmail&&isPassword&&isPassword2)){
        setNicknameMessage("닉네임을 입력해주세요.");
        nicknameAlert.style.display='block';
      }
    }
     
  }, [setStep1Clear, step1Clear, isNickname, setNicknameMessage, isEmail, isPassword, isPassword2]); // 여기에 의존성을 명시 


  // 닉네임 검사
  const onChangeNickname=(e)=>{
    

    const currentNickname = e.target.value.trim();  //스페이스바도 들어가버리는 문제-trim()
    setNickname(currentNickname);
    if(currentNickname===""){
      setIsNickname(false);
    }else{
      setIsNickname(true);
    }
    console.log(isNickname);
  }
  // 이메일 검사
  const onChangeEmail=(e)=>{
    const emailAlert = document.getElementById("emailAlert");
    const emailSuccess = document.getElementById("emailSuccess");

    const currentEmail = e.target.value.trim();
    setEmail(currentEmail);
    
    const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;   //이메일 정규식 ^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$
    
    if (!emailRegExp.test(currentEmail)){
      emailSuccess.style.display='none';
      setEmailMessage('이메일 형식이 맞지 않습니다.');
      emailAlert.style.display='block';
      setIsEmail(false);
    }else{
      emailAlert.style.display="none";
      setEmailMessage('사용 가능한 이메일입니다.');
      emailSuccess.style.display='block';
      setIsEmail(true);
    }
    console.log(isEmail)
  };
  // 비밀번호 검사
  const onChangePassword=(e)=>{
    const passwordAlert = document.getElementById("passwordAlert");
    const passwordSuccess = document.getElementById("passwordSuccess");

    const currentPassword = e.target.value.trim();  //스페이스바도 들어가버리는 문제-trim()
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ;   //비밀번호 정규식 ^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$
    
    if (!passwordRegExp.test(currentPassword)){
      passwordSuccess.style.display="none";
      setPasswordMessage('비밀번호는 최소 8 자, 하나 이상의 문자와 하나 이상의 숫자여야 합니다. 특수문자는 사용 불가합니다.');
      passwordAlert.style.display='block';
      setIsPassword(false);
    }else{
      passwordAlert.style.display="none";
      setPasswordMessage('사용 가능한 비밀번호입니다.');
      passwordSuccess.style.display='block';
      setIsPassword(true);
    }
    console.log(isPassword)
  };

  // 비밀번호 재확인 검사
  const onChangePassword2=(e)=>{
    const password2Alert = document.getElementById("password2Alert");
    const password2Success = document.getElementById("password2Success");

    const currentPassword2 = e.target.value.trim();  //스페이스바도 들어가버리는 문제-trim()
    setPassword2(currentPassword2);

    if (password !== currentPassword2) {
      password2Success.style.display = "none";
      setPassword2Message('비밀번호가 다릅니다.');
      password2Alert.style.display = 'block';
      setIsPassword2(false);
    } else if (password === currentPassword2 && password !== "") { // 일치하고 공백이 아닌 경우에 성공 메시지 표시
      password2Alert.style.display = "none";
      setIsPassword2(true);
      setPassword2Message('비밀번호가 확인되었습니다.');
      setIsPassword2(true);
      password2Success.style.display = 'block';
      setIsPassword2(true);
    } else { // 빈 비밀번호인 경우에도 에러 메시지 표시
      password2Success.style.display = "none";
      setPassword2Message('비밀번호를 먼저 입력해주세요.');
      password2Alert.style.display = 'block';
      setIsPassword2(false);
    }
    
  };
  



  
  return (
    <Container>
      {/* <h1>Step 1의 내용: 이곳에는 Step 1의 내용이 표시됩니다.</h1> */}
      <div className="inputContainer">
        <div className="inputTitle">
          닉네임
          <span className="essential">
            {" "}
            {"("}필수{")"}
          </span>
        </div>
        <div className="inputWrap">
          <input
            onChange={onChangeNickname}
            value={nickname}
            className="inputForm"
            placeholder="닉네임을 입력해주세요."
            type="text"
            required
            name="nickname"
          />
          <br />
          <Stack id="nicknameAlert" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="error" sx={{}}>
              {nicknameMessage} — <strong>check it out!</strong>
            </Alert>
          </Stack>
          <Stack id="nicknameSuccess" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="success" sx={{}}>
              {nicknameMessage} — <strong>success!</strong>
            </Alert>
          </Stack>
        </div>
      </div>
      
      <div className="inputContainer">
        <div className="inputTitle">
          이메일
          <span className="essential">
            {" "}
            {"("}필수{")"}
          </span>
        </div>
        <div className="inputWrap">
      
          <input
            onChange={onChangeEmail}  
            value={email}
            className="inputForm" 
            placeholder="이메일을 입력해주세요."
            type="email"
            required
            name="email"
          />
          <br />
          <Stack id="emailAlert" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="error" sx={{}}>
              {emailMessage} — <strong>check it out!</strong>
            </Alert>
          </Stack>
          <Stack id="emailSuccess" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="success" sx={{}}>
              {emailMessage} — <strong>success!</strong>
            </Alert>
          </Stack>
        </div>
      </div>

      <div className="inputContainer">
        <div className="inputTitle">
          비밀번호
          <span className="essential">
            {" "}
            {"("}필수{")"}
          </span>
        </div>
        <div className="inputWrap">
          <input
            onChange={onChangePassword}
            value={password}
            className="inputForm"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            required
            name="password"
          />
          <br />
          <Stack id="passwordAlert" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="error" sx={{}}>
              {passwordMessage} — <strong>check it out!</strong>
            </Alert>
          </Stack>
          <Stack id="passwordSuccess" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="success" sx={{}}>
              {passwordMessage} — <strong>success!</strong>
            </Alert>
          </Stack>
        </div>
      </div>

      <div className="inputContainer">
        <div className="inputTitle">
          비밀번호 재확인
          <span className="essential">
            {" "}
            {"("}필수{")"}
          </span>
        </div>
        <div className="inputWrap">
          <input
            onChange={onChangePassword2}
            value={password2}
            className="inputForm"
            placeholder="비밀번호를 재입력해주세요."
            type="password"
            required
            name="password2"
          />
          <br />
          <Stack id="password2Alert" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="error" sx={{}}>
              {password2Message} — <strong>check it out!</strong>
            </Alert>
          </Stack>
          <Stack id="password2Success" sx={{ width: '100%', display:'none'}} spacing={2}>
            <Alert severity="success" sx={{}}>
              {password2Message} — <strong>success!</strong>
            </Alert>
          </Stack>
        </div>
      </div>
    </Container>
  );
};

export default Step1Content;
