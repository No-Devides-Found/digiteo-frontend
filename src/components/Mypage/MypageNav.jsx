import React from "react";
import { Paper, Button, MenuList, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledMenuList = styled(MenuList)({
  display: "block",
  padding: 0,
  li: {
    justifyContent: "center",
    borderRadius: "0.25rem",
    backgroundColor: "#F1F8E9",
  },
  "li:nth-of-type(1)": { backgroundColor: "#DCEDC8", fontFamily: "Krona One" },
  ".currPage": { backgroundColor: "#DCEDC8" },
});

function MypageNav({ setPathname }) {
  const navigate = useNavigate();
  // window.location.pathname.split("/")[2];
  return (
    <Paper>
      <StyledMenuList>
        <MenuItem>MY DIGITEO</MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/mypage/profile");
            setPathname("profile");
          }}
        >
          회원 정보
        </MenuItem>
        {/* <MenuItem>알림</MenuItem> */}
        <MenuItem
          onClick={() => {
            navigate("/mypage/courses");
            setPathname("courses");
          }}
        >
          프로그램 참여 현황
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/mypage/posts");
            setPathname("posts");
          }}
        >
          나의 커뮤니티 활동
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/mypage/mypractice");
            setPathname("mypractice");
          }}
        >
          나의 창작마루
        </MenuItem>
        {/* <MenuItem>프로그램 기획자 신청</MenuItem> */}
      </StyledMenuList>
    </Paper>
  );
}

export default MypageNav;
