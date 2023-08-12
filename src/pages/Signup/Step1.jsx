import React from "react";
import {Container, Tooltip} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
export const Step1Content = ({
  nickname,
  setNickname,
  email, setEmail, emailMessage, setEmailMessage, isEmail, setIsEmail,
  password,
  setPassword,
  password2,
  setPassword2,
}) => {

  const onChangeEmail=(e)=>{
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;   //이메일 정규식 ^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$
    
    if (!emailRegExp.test(currentEmail)){
      setEmailMessage('이메일 조건 충족해주세요!');
      setIsEmail(false);
    }else{
      setEmailMessage('사용 가능한 이메일입니다.');
      setIsEmail(true);
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
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            value={nickname}
            className="inputForm"
            placeholder="닉네임을 입력해주세요."
            type="text"
            required
            name="nickname"
          />
          <br />
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
        <Tooltip title="이메일 조건을 충족해주세요." placement="bottom">
          <input
            onChange={onChangeEmail} 
            value={email}
            className="inputForm"
            placeholder="이메일을 입력해주세요."
            type="email"
            required
            name="email"
          />
        </Tooltip>
          <br />
          <div>{emailMessage}</div>
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="inputForm"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            required
            name="password"
          />
          <br />
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
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            value={password2}
            className="inputForm"
            placeholder="비밀번호를 재입력해주세요."
            type="password"
            required
            name="password2"
          />
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Step1Content;
