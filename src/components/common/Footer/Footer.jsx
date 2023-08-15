import { Box, Typography, Container } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <Box sx={{ backgroundColor: "#FFF3E0" }}>
      <Container sx={{ ml: "3%", mr: "3%", lineHeight: "2rem" }}>
        <Typography
          variant="h6"
          fontFamily={"Krona One"}
          sx={{
            position: "relative",
            display: "flex",
            pt: "2rem",
            mb: "1%",
          }}
        >
          
          DIGITEO
        </Typography>
        <Typography
          variant="h7"
          fontFamily={"Krona One"}
          fontWeight={"600"}
          sx={{
            position: "relative",
            display: "flex",
            height: null,
          }}
        >
          <p>
            디지터는 아동 청소년들을 대상으로 디지털 리터러시 교육 프로그램을
            제공하는 플랫폼입니다.
            <br />
            해당 서비스 내의 모든 저작물은 비영리 목적에 한해서만 출처를 밝히고
            공유할 수 있습니다. <br />
          </p>
        </Typography>
        <Typography
          fontSize={13}
          fontFamily={"Krona One"}
          fontWeight={"bold"}
          sx={{
            position: "relative",
            display: "flex",
            pb: "1rem",
          }}
        >
          TEL : 010-2503-3692 주중 09 ~ 18시 (12 ~ 13시 및 공휴일 제외) | E-mail
          : 98william@hanmail.net
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
