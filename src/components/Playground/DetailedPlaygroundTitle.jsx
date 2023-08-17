import React from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { Chips } from "../index";
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
  backgroundColor: "#FFA000",
  width: "30%",
  color: "#000",
});

function DetailedPlaygroundTitle({ program }) {
  return (
    program && (
      <>
        {/* 프로그램 타이틀 */}
        <Box
          sx={{
            bgcolor: "#F1F8E9",
            p: 5,
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <img src={program.thumbnail} alt={program.title} width={"35%"} />
            <Grid item xs={5} alignItems={"center"} justifyContent={"center"}>
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign={"center"}
                sx={{ mb: "1rem" }}
              >
                {program.title}
              </Typography>
              <Chips tags={program.tag} />
              <Grid container justifyContent={"center"} gap="2rem">
                <Grid item>
                  별점{" "}
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3625 11.0752C11.3374 11.3213 10.2672 11.3094 9.24783 11.0405C8.22844 10.7715 7.29166 10.254 6.52137 9.53419C5.75108 8.81437 5.17134 7.91476 4.83406 6.91591C4.49677 5.91706 4.41248 4.85015 4.58872 3.81073C4.56192 3.83662 4.53362 3.86091 4.50397 3.88348C4.29397 4.04323 4.03146 4.10248 3.50646 4.22098L3.0302 4.32898C1.18519 4.74672 0.262679 4.95522 0.0429266 5.66097C-0.176075 6.36597 0.452431 7.10171 1.71019 8.57245L2.0357 8.9527C2.3927 9.37045 2.57195 9.5797 2.6522 9.8377C2.73245 10.0964 2.70545 10.3754 2.65145 10.9327L2.60195 11.4404C2.4122 13.4032 2.31695 14.3842 2.89145 14.8199C3.46596 15.2564 4.32997 14.8589 6.05648 14.0632L6.50424 13.8577C6.99474 13.6312 7.23999 13.5187 7.50025 13.5187C7.7605 13.5187 8.00575 13.6312 8.49701 13.8577L8.94326 14.0632C10.6705 14.8582 11.5345 15.2557 12.1083 14.8207C12.6835 14.3842 12.5883 13.4032 12.3985 11.4404L12.3625 11.0752Z"
                      fill="#FFD233"
                    />
                    <path
                      opacity="0.5"
                      d="M5.36502 2.55599L5.11902 2.99698C4.84902 3.48148 4.71402 3.72373 4.50401 3.88348C4.53401 3.86098 4.56176 3.83698 4.58876 3.81073C4.41248 4.85023 4.49677 5.91722 4.83409 6.91615C5.17141 7.91508 5.75122 8.81474 6.52161 9.53458C7.29199 10.2544 8.22889 10.7719 9.24838 11.0408C10.2679 11.3097 11.3382 11.3215 12.3633 11.0752L12.3483 10.9327C12.2951 10.3754 12.2681 10.0964 12.3483 9.8377C12.4286 9.5797 12.6071 9.37045 12.9648 8.9527L13.2903 8.57245C14.5481 7.10246 15.1766 6.36671 14.9569 5.66097C14.7379 4.95522 13.8153 4.74597 11.9703 4.32898L11.4933 4.22098C10.9691 4.10248 10.7066 4.04323 10.4958 3.88348C10.2858 3.72373 10.1508 3.48148 9.88081 2.99698L9.63556 2.55599C8.6853 0.851995 8.21055 0 7.50029 0C6.79003 0 6.31528 0.851995 5.36502 2.55599Z"
                      fill="#FFD233"
                    />
                  </svg>
                  {program.score ? program.score : 0}
                </Grid>
                <Grid item>참여인원 {program.participants_cnt}명</Grid>
              </Grid>
              <Stack
                sx={{ mt: "1rem" }}
                spacing={2}
                direction={"row"}
                justifyContent={"center"}
              >
                <StyledButton variant="contained">찜하기</StyledButton>
                <StyledButton variant="contained">참여하기</StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </>
    )
  );
}

export default DetailedPlaygroundTitle;
