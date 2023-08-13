import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from '@mui/material/FormControl';

const Step2Content = ({
  step2Clear, setStep2Clear, 
  year, setYear, month, setMonth, day, setDay,
  identity, setIdentity, identityMessage, setIdentityMessage, isIdentity, setIsIdentity,
  grade, setGrade, gradeMessage, setGradeMessage, isGrade, setIsGrade,
  school, setSchool,
}) => {


  useEffect(() => {
    createYearOptions();
    createDayOptions();
  }, []);

  useEffect(()=>{
    const gradeAlert = document.getElementById('gradeAlert');
    
    if(identity === "none"){
      gradeAlert.style.display="none";
      setIsGrade(true)
      setStep2Clear(true) 
    }else if((identity !== "none")&&(!isGrade)){
      setStep2Clear(false) 
      setGradeMessage("학년을 선택해주세요.")
      gradeAlert.style.display="block";
    }else{
      gradeAlert.style.display="none";
      setStep2Clear(true) 
    }
    
  }, [identity, setGradeMessage, step2Clear, setStep2Clear, isGrade, setIsGrade] );   

  // year option 목록 생성
  function createYearOptions() {
    const years = Array.from({ length: 75 }, (_, index) => 2023 - index);
    
    const yearOptions = years.map((i) => (
      <option key={`year-${i}`} value={i}>
        {i} 년
      </option>
    ));
    
    return yearOptions;
  }

  // day option 목록 생성
  function createDayOptions() {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const dayOptions = days.map((day) => (
      <option key={`day-${day}`} value={String(day).padStart(2, "0")}>
        {day} 일
      </option>
    ));
    return dayOptions;
  }

 
  // 생년월일 검사
  // const [isYear, setIsYear]= useState(false);  
  // const [isMonth, setIsMonth]= useState(true); 
  // const [isDay, setIsDay]= useState(true); 

  const onChangeYear = (e) =>{
    setYear(e.target.value);
  }
  const onChangeMonth = (e) =>{
    setMonth(e.target.value);
  }
  const onChangeDay = (e) =>{
    setDay(e.target.value);
  }
  

  // 회원유형 
  const onChangeIdentity = (e) => {
    const currentIdentity = e.target.value;
    setIdentity(currentIdentity);
    if(grade ==="0"){
      setIsGrade(false);
    }
  }

  const onChangeGrade = (e) =>{
    const currentGrade = e.target.value;
    setGrade(currentGrade);

    setIsGrade(true)
  }

  //
  return (
    <div>
      <div className="inputContainer" id="info-birth">
        <div className="inputTitle">
          생년월일을 선택해주세요.
          <span className="essential">
            {" "}
            {"("}필수{")"}
          </span>
        </div>

        <select
          className="selectWrap"
          id="birth-year"
          onChange={onChangeYear}
        >
          <option key="birth-year" value="0" disabled>
            출생 연도
          </option>
          {createYearOptions()} 
        </select>

        <select
          required
          className="selectWrap"
          id="birth-month"
          onChange={onChangeMonth}
          value={month}
        >
          <option disabled value="00">
            월
          </option>
          <option default value="01">
            1월
          </option>
          <option value="02">2월</option>
          <option value="03">3월</option>
          <option value="04">4월</option>
          <option value="05">5월</option>
          <option value="06">6월</option>
          <option value="07">7월</option>
          <option value="08">8월</option>
          <option value="09">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>

        <select
          className="selectWrap"
          id="birth-day"
          onChange={onChangeDay}
          value={day}
        >
          <option disabled value="0">
            일
          </option>
          {createDayOptions()}
        </select>

      </div>

      {/* 회원유형 */}
      <div className="inputContainer">
        <div className="inputTitle">
          회원유형을 선택해주세요.
          <span className="essential">
            {" "}
            {"("}필수{")"}
          </span>
        </div>
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
                  disabled={identity==="none"}>
                  <option value="0" disabled>학년</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년</option>
                  <option value="5">5학년</option>
                  <option value="6">6학년</option>
            </select>
            <Stack id="gradeAlert" sx={{ width: '100%', display:'none'}} spacing={2}>
              <Alert severity="error" sx={{}}>
                {gradeMessage} — <strong>check it out!</strong>
              </Alert>
            </Stack>
          </Grid>
        </Grid>
      </div>

      {/* 소속 */}
      <div className="inputContainer">
        <div className="inputTitle">
          소속을 알려주세요.
          <span className="choice">
            {" "}
            {"("}선택{")"}
          </span>
        </div>
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
          <br />
        </div>
      </div>
    </div>
  );
};

export default Step2Content;
