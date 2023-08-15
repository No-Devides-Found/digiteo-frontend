import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Avatar,
  Grid,
  TextField,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AdditionalInfo from "../AdditionalInfo";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/user";

function Profile() {
  const profile = {
    nickname: "하람",
    birth: "2018-07-06",
    job: "none",
    grade: "0",
    department: "국민대학교",
  };

  const user = useRecoilValue(userState);

  const [step2Clear, setStep2Clear] = useState(false);

  const [identity, setIdentity] = useState(profile.job); //회원유형 (필수)
  const [grade, setGrade] = useState(profile.grade); //학년 (필수)
  const [school, setSchool] = useState(profile.department); //소속 (선택)

  const [gradeMessage, setGradeMessage] = useState("");

  const [isGrade, setIsGrade] = useState(profile.grade == "0" ? false : true);

  const onAdditionalButtonClick = (e) => {
    const additionalData = {
      job: identity,
      grade: grade,
      department: school,
    };
    console.log(additionalData);
  };

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
          <Grid sx={{ position: "relative" }}>
            <Avatar alt="" src="" sx={{ width: 100, height: 100 }} />
            <IconButton
              aria-label="Example"
              sx={{ position: "absolute", bottom: -10, right: -10 }}
            >
              <CameraAltOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid xs={8}>
            <Stack spacing={2}>
              <div className="inputContainer">
                <div className="inputTitle">닉네임</div>
                <div className="inputForm" style={{ lineHeight: "1rem" }}>
                  {profile.nickname}
                </div>
              </div>
              <Button
                variant="contained"
                disabled
                style={{
                  width: "fit-content",
                }}
              >
                저장하기
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider variant="middle" sx={{ my: 1 }} />

      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          개인 정보
        </Typography>
        <Stack>
          <div className="inputContainer">
            <div className="inputTitle">이메일</div>
            <div className="inputForm" style={{ lineHeight: "1rem" }}>
              {user.email}
            </div>
          </div>

          <div className="inputContainer" id="info-birth">
            <div className="inputTitle">생년월일</div>
            <Stack direction={"row"}>
              <div
                className="selectWrap"
                id="birth-year"
                style={{ lineHeight: "1rem" }}
              >
                {profile.birth.split("-")[0]}
              </div>
              <div
                className="selectWrap"
                id="birth-month"
                style={{ lineHeight: "1rem" }}
              >
                {profile.birth.split("-")[1]}
              </div>
              <div
                className="selectWrap"
                id="birth-day"
                style={{ lineHeight: "1rem" }}
              >
                {profile.birth.split("-")[2]}
              </div>
            </Stack>
          </div>
        </Stack>
      </Container>
      <Divider variant="middle" sx={{ my: 1 }} />

      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          추가 정보
        </Typography>
        <Stack>
          <AdditionalInfo
            step2Clear={step2Clear}
            setStep2Clear={setStep2Clear}
            identity={identity}
            setIdentity={setIdentity}
            grade={grade}
            setGrade={setGrade}
            gradeMessage={gradeMessage}
            setGradeMessage={setGradeMessage}
            isGrade={isGrade}
            setIsGrade={setIsGrade}
            school={school}
            setSchool={setSchool}
          />
          <Button
            variant="contained"
            disabled={!step2Clear}
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={onAdditionalButtonClick}
          >
            저장하기
          </Button>
        </Stack>
      </Container>
      <Divider variant="middle" sx={{ my: 1, visibility: "hidden" }} />
    </Box>
  );
}

export default Profile;
