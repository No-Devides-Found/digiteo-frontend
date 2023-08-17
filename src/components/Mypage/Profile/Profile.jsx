import React, { useState, useRef, useEffect } from "react";
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
import { userState, withProfile } from "../../../recoil/user";
import Api from "../../../api/api";
import { server } from "../../../constants";

import { useSnackbar } from "notistack"; // 성공 알림 스낵바

function Profile() {
  const { enqueueSnackbar } = useSnackbar();

  const user = useRecoilValue(userState);
  const profile = useRecoilValue(withProfile);

  const [step2Clear, setStep2Clear] = useState(false);
  const [identity, setIdentity] = useState(profile.job); //회원유형 (필수)
  const [grade, setGrade] = useState(profile.grade); //학년 (필수)
  const [school, setSchool] = useState(profile.department); //소속 (선택)
  const [gradeMessage, setGradeMessage] = useState("");
  const [isGrade, setIsGrade] = useState(profile.grade == "0" ? false : true);
  const [image, setImage] = useState(profile.img); // 현재(보여질)이미지
  const [file, setFile] = useState(); // 업로드하려는 이미지파일

  const uploadInputRef = useRef(null);
  const [isChanged, setIsChanged] = useState(false);

  // 이미지 파일 인풋
  const handleFileInputChange = (e) => {
    // console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(profile.img);
      setFile(null);
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // 이미지 저장
  const onImageSubmitButtonClick = (e) => {
    console.log(file);
    // 폼데이터 생성
    const formData = new FormData();
    formData.append("img", file);
    formData.append("enctype", "multipart/form-data");
    console.log(formData);
    Api.patch(`${server}/accounts/profile/${user.pk}/`, formData).then(
      (res) => {
        // 성공.
        setFile(null);
        enqueueSnackbar("프로필 이미지 변경 성공!", {
          variant: "success",
        });
      }
    );
  };

  useEffect(() => {
    if (
      profile.job != identity ||
      profile.grade != grade ||
      profile.department != school
    ) {
      setIsChanged(true);
    }
  }, [identity, grade, school]);

  const onAdditionalButtonClick = (e) => {
    const additionalData = {
      job: identity,
      grade: grade,
      department: school,
    };
    console.log(additionalData);

    Api.patch(`${server}/accounts/profile/${user.pk}/`, additionalData).then(
      (res) => {
        // 성공.
        enqueueSnackbar("프로필 정보 변경 성공!", {
          variant: "success",
        });
        setIsChanged(false);
      }
    );
  };

  return (
    <Box sx={{ backgroundColor: "" }}>
      <Container>
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
            <Avatar alt="" src={image} sx={{ width: 100, height: 100 }} />
            <IconButton
              onClick={() =>
                uploadInputRef.current && uploadInputRef.current.click()
              }
              aria-label="Example"
              sx={{ position: "absolute", bottom: -10, right: -10 }}
            >
              <input
                ref={uploadInputRef}
                name="profile_img"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <CameraAltOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"Krona One"}
              >
                {profile.nickname}
              </Typography>

              <Button
                variant="contained"
                disabled={!file} //file이 있으면 false
                style={{
                  width: "fit-content",
                }}
                onClick={onImageSubmitButtonClick}
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
            disabled={!step2Clear || !isChanged}
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
