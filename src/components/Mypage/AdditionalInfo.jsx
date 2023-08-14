import React, { useEffect } from "react";
import {
  Grid,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from "@mui/material";

function AdditionalInfo({
  step2Clear,
  setStep2Clear,
  identity,
  setIdentity,
  grade,
  setGrade,
  gradeMessage,
  setGradeMessage,
  isGrade,
  setIsGrade,
  school,
  setSchool,
}) {
  // 회원유형
  const onChangeIdentity = (e) => {
    const currentIdentity = e.target.value;
    setIdentity(currentIdentity);
    if (grade === "0") {
      setIsGrade(false);
    }
  };

  const onChangeGrade = (e) => {
    const currentGrade = e.target.value;
    setGrade(currentGrade);

    setIsGrade(true);
  };

  useEffect(() => {
    const gradeAlert = document.getElementById("gradeAlert");

    if (identity === "none") {
      gradeAlert.style.display = "none";
      setIsGrade(true);
      setStep2Clear(true);
    } else if (identity !== "none" && !isGrade) {
      setStep2Clear(false);
      setGradeMessage("학년을 선택해주세요.");
      gradeAlert.style.display = "block";
    } else {
      gradeAlert.style.display = "none";
      setStep2Clear(true);
    }
  }, [
    identity,
    setGradeMessage,
    step2Clear,
    setStep2Clear,
    isGrade,
    setIsGrade,
  ]);

  return (
    <Stack>
      {" "}
      {/* 회원유형 */}
      <div className="inputContainer">
        <div className="inputTitle">회원유형</div>
        <Grid container>
          <Grid item xs>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={onChangeIdentity}
              value={identity}
            >
              <FormControlLabel
                value="none"
                control={<Radio />}
                label="선택 안 함"
              />
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="학생"
              />
              <FormControlLabel
                value="teacher"
                control={<Radio />}
                label="선생님"
              />
            </RadioGroup>
          </Grid>

          <Grid item xs>
            <select
              className="selectWrap"
              id="grade"
              onChange={onChangeGrade}
              value={grade}
              disabled={identity === "none"}
            >
              <option value="0" disabled>
                학년
              </option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
              <option value="4">4학년</option>
              <option value="5">5학년</option>
              <option value="6">6학년</option>
            </select>
            <Stack
              id="gradeAlert"
              sx={{ width: "100%", display: "none" }}
              spacing={2}
            >
              <Alert severity="error" sx={{}}>
                {gradeMessage} — <strong>check it out!</strong>
              </Alert>
            </Stack>
          </Grid>
        </Grid>
      </div>
      {/* 소속 */}
      <div className="inputContainer">
        <div className="inputTitle">소속</div>
        <div className="inputWrap">
          <input
            onChange={(e) => {
              setSchool(e.target.value);
            }}
            value={school}
            className="inputForm"
            placeholder="예) 국민초등학교"
            type="text"
            name="school"
          />
        </div>
      </div>
    </Stack>
  );
}

export default AdditionalInfo;
