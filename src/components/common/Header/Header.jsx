import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { isAccessExpired } from "../../../utils";
import LoginBlock from "./LoginBlock";

function Header() {
  //const handleLogout = () => {
  //localStorage.removeItem("access_token"); //토큰 삭제
  //localStorage.removeItem("access_expiration"); //토큰 기한 삭제
  //window.location.replace("/signin"); //로그인 창으로 돌려보내기
  // };

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2vw",
        }}
      >
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h5" fontFamily={"Krona One"}>
              DIGITEO
            </Typography>
          </Link>
        </Box>

        {isAccessExpired() ? (
          //true일때
          <Box style={{ display: "flex", gap: "2vw" }}>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "black" }}
            >
              로그인
            </Link>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              회원가입
            </Link>
          </Box>
        ) : (
          //false일때
          <LoginBlock />
        )}
      </Box>
    </>
  );
}

export default Header;
