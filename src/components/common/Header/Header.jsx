import React from 'react';
import { Link } from 'react-router-dom';
import {Box,Typography} from "@mui/material";
import moment from "moment";


//접근 만료가 됐는지 아닌지 boolean값이 저장됨
const isAccessExpired = () => {
    const accessExpiration = localStorage.getItem("access_expiration");
  
    if (!accessExpiration) {
      //접근 기한이 없을때
      return true;
    }
  
    const currentDateTime = moment();
    const expirationDateTime = moment(accessExpiration, "YYYY-MM-DD HH:mm:ss");
  
    return currentDateTime.isAfter(expirationDateTime);
    //현재 시각이 기한 이후면 true 아니면 false
  };

function Header() {
  
  //const handleLogout = () => {
    //localStorage.removeItem("access_token"); //토큰 삭제
    //localStorage.removeItem("access_expiration"); //토큰 기한 삭제
    //window.location.replace("/signin"); //로그인 창으로 돌려보내기
  // };

  return (
    <Box style={{ display: "flex", justifyContent: "space-between", padding: "2vw" }}>
      <Box>
        <Link to="/" style={{ textDecoration: "none", color:"black" }}>
          <Typography
            variant="h5"
            fontFamily={"Krona One"}
          >
            DIGITEO
          </Typography>
        </Link>
      </Box>
      
        {isAccessExpired() ? (
          //true일때
          <Box style={{ display: "flex", gap: "2vw"}}>
            <Link to="/signin" style={{ textDecoration: "none", color:"black" }}>로그인</Link>
            <Link to="/signup" style={{ textDecoration: "none", color:"black" }}>회원가입</Link>
          </Box>
        ) : (
            //false일때
            <Box style={{ display: "flex", gap: "2vw"}}>
                <img src="프로필사진경로" alt="프로필사진" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                <span>{"유저 닉네임"}</span>
            
          </Box>
        )}
      </Box>
    
  );
}

export default Header;
