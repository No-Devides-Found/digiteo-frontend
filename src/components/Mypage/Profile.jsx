import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Avatar,
  Grid,
  TextField,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function Profile() {
  return (
    <Box sx={{ backgroundColor: "lightgrey" }}>
      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          프로필
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            my: "2rem",
            width: "100%",
          }}
        >
          <Grid>
            <Avatar alt="" src="" sx={{ width: 100, height: 100 }} />
            <Typography component="p" sx={{ mt: "1rem" }}>
              수정하기
              <BorderColorIcon
                sx={{ color: "grey", fontSize: "1rem", ml: "0.5rem" }}
              />
            </Typography>
          </Grid>
          <Grid xs={8}>
            <TextField
              id="nickname-textfield"
              label="닉네임"
              value={"닉네임"}
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
      <Divider variant="middle" sx={{ my: 1 }} />

      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          개인 정보
        </Typography>
      </Container>
      <Divider variant="middle" sx={{ my: 1 }} />

      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          추가 정보
        </Typography>
      </Container>
      <Divider variant="middle" sx={{ my: 1 }} />

      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          보안 정보
        </Typography>
      </Container>
      <Divider variant="middle" sx={{ my: 1, visibility: "hidden" }} />
    </Box>
  );
}

export default Profile;
