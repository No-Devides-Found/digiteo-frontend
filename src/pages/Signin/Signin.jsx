import React, { useState } from "react";
import Axios from "axios";
import "./Signin.css";
import moment from "moment";
import { server } from "../../constants";

// import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Box, Button, Typography, Container } from "@mui/material";

import { styled } from "@mui/material/styles";
import playground from "../../assets/playground.jpg";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";

// 컬러 테마
const StyledButton = styled(Button)({
  backgroundColor: "rgba(246, 93, 27, 0.65)",
  width: "100%",
  height: "3rem",
  display: "block",
  textAlign: "center",
  color: "black",
  // fontWeight:'bold',
  margin: "0.5rem auto",
  borderRadius: "0.8rem",
  "&:hover": {
    backgroundColor: "rgba(246, 93, 27, 1)",
  },
});

const preventDefault = (event) => event.preventDefault();

const Signin = () => {
  // 유저 정보 상태 관리
  const [curUser, setCurUser] = useRecoilState(userState);

  const [email, setEmail] = useState(""); //아이디=이메일로 입력받음
  const [password, setPassword] = useState(""); //비밀번호
  // const [errors, setErrors] = useState(false)  //에러메세지

  // 폼 제출 이벤트 처리 - 서버로 사용자 정보를 전송하고 로그인을 처리
  const onSubmit = (e) => {
    e.preventDefault();

    //email 및 password 속성을 가진 user 객체를 생성
    const user = {
      email: email,
      password: password,
    };

    Axios.post(`${server}/accounts/dj-rest-auth/login/`, user)
      //POST 요청이 성공적으로 완료 - 서버 응답 처리
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
        }

        //응답에 key값 없음 = 로그인 실패
        else {
          setEmail("");
          setPassword("");
          localStorage.clear();
          // setErrors(true)
        }
      })
      //요청 실패
      .catch((err) => {
        console.clear();
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setEmail("");
        setPassword("");
      });
  };

  const movetoSignup = (e) => {};

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container style={{ position: "absolute" }}>
          <img
            src={playground}
            alt="playground"
            style={{
              height: "fit-content",
              width: "25rem",
              margin: "10rem auto",
              display: "block",
            }}
          />
        </Container>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          position: "relative",
          height: "100vh",
          padding: "5rem 5rem 2rem 0",
        }}
        className="signinRight"
      >
        <Container style={{ position: "absolute" }}>
          <Typography
            fontFamily={"Krona One"}
            fontSize={"2rem"}
            sx={{ margin: "2rem auto", textAlign: "center" }}
          >
            Digiteo
          </Typography>

          <form onSubmit={onSubmit} className="signinWrap">
            {/* input 태그 이용 - 스타일 적용이 쉬움... */}
            <div className="inputContainer">
              <div className="inputTitle">이메일</div>
              <div className="inputWrap">
                <input
                  className="inputForm"
                  placeholder="이메일을 입력해주세요."
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputTitle">비밀번호</div>
              <div className="inputWrap">
                <input
                  className="inputForm"
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
            </div>
            <StyledButton type="submit" variant="contained">
              로그인
            </StyledButton>
            <Link to="/signup" style={{textDecoration:"none"}}> 
            <StyledButton
              style={{ backgroundColor: "#E9E9E9" }}
              variant="contained"
            >
              회원가입
            </StyledButton></Link>
          </form>

          {/* 하단 부가 기능 */}
          <Box onClick={preventDefault}>
            <Link underline="none" key="1" color="inherit" href="/">
              아이디 찾기
            </Link>
            {""} | {""}
            <Link underline="none" key="2" color="inherit" href="/">
              비밀번호 찾기
            </Link>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Signin;
