import React from "react";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography,Box } from "@mui/material";

function Header() {
  return (
      <Box style={{display:"flex",justifyContent:"space-between",padding:"2vw" }}>
        <Box item xs >
          <Link to="/" style={{textDecoration:"none"}}><Typography 
          variant="h5"
          fontFamily={"Krona One"}
          >
            DIGITEO
          </Typography></Link>
        </Box>
        <Box item xs style={{display:"flex",gap:"2vw",}}>
          <Link to="/signin" style={{textDecoration:"none"}}>로그인</Link>
          
          <Link to="/signup" style={{textDecoration:"none"}} >회원가입</Link>
        </Box>
      </Box>
  );
}

export default Header;
