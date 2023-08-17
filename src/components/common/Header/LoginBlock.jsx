import React, { useEffect, useState } from "react";
import { Box, Avatar } from "@mui/material";
import UserModal from "./UserModal";

import { isAccessExpired } from "../../../utils";
import { useRecoilValue } from "recoil";
import { withProfile } from "../../../recoil/user";

function LoginBlock() {
  const [open, setOpen] = useState(false); // 프로필 모달 오픈 상태관리
  const userProfile = useRecoilValue(withProfile);

  const handleOpen = () => setOpen(true);

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
          gap: "1rem",
        }}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={handleOpen}
      >
        <Avatar
          src={userProfile.img}
          alt="프로필사진"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
        <span style={{ lineHeight: "50px" }}>{userProfile.nickname}</span>
      </Box>
      <UserModal open={open} setOpen={setOpen} />
    </>
  );
}

export default LoginBlock;
