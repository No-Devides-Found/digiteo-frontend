import React from "react";
import { Paper, MenuList, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledMenuList = styled(MenuList)({
  display: "block",
  padding: 0,
  li: {
    justifyContent: "center",
    borderRadius: "0.25rem",
    backgroundColor: "#E9E9E9",
  },
  "li:nth-of-type(1)": {
    backgroundColor: "#FFCC80",
    height: "5rem",
    lineHeight: "5rem",
    fontWeight: "bolder",
  },
  ".currPage": { backgroundColor: "#FFF3E0" },
});

function PlaygroundNav({ pathname, setPathname }) {
  const navigate = useNavigate();
  // window.location.pathname.split("/")[2];
  return (
    <Paper sx={{ mt: 9 }}>
      <StyledMenuList>
        <MenuItem>디지털 놀이터</MenuItem>
        <MenuItem
          className={pathname === "communication" ? "currPage" : null}
          onClick={() => {
            navigate("/playground/communication");
            setPathname("communication");
          }}
        >
          소통 놀이터
        </MenuItem>
        <MenuItem
          className={pathname === "tech" ? "currPage" : null}
          onClick={() => {
            navigate("/playground/tech");
            setPathname("tech");
          }}
        >
          테크 놀이터
        </MenuItem>
        <MenuItem
          className={pathname === "information" ? "currPage" : null}
          onClick={() => {
            navigate("/playground/information");
            setPathname("information");
          }}
        >
          정보 놀이터
        </MenuItem>
        <MenuItem
          className={pathname === "social" ? "currPage" : null}
          onClick={() => {
            navigate("/playground/social");
            setPathname("social");
          }}
        >
          사회 놀이터
        </MenuItem>
        <MenuItem
          className={pathname === "culture" ? "currPage" : null}
          onClick={() => {
            navigate("/playground/culture");
            setPathname("culture");
          }}
        >
          문화 놀이터
        </MenuItem>
      </StyledMenuList>
    </Paper>
  );
}

export default PlaygroundNav;
