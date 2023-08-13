import React from "react";
import { Paper, Button, MenuList, MenuItem } from "@mui/material";
import styled from "@emotion/styled";

const StyledMenuList = styled(MenuList)({
  display: "block",
  padding: 0,
  li: { justifyContent: "center", borderRadius: "0.25rem" },
  "li:nth-child(1)": { backgroundColor: "#FFA000" },
});

function MypageNav() {
  return (
    <Paper>
      <StyledMenuList>
        <MenuItem>MY DIGITEO</MenuItem>
        <MenuItem>회원 정보</MenuItem>
        <MenuItem>알림</MenuItem>
        <MenuItem>프로그램 참여 현황</MenuItem>
        <MenuItem>나의 커뮤니티 활동</MenuItem>
        <MenuItem>나의 창작마루</MenuItem>
        {/* <MenuItem>프로그램 기획자 신청</MenuItem> */}
      </StyledMenuList>
    </Paper>
  );
}

export default MypageNav;
