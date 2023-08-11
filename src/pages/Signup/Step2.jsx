import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from '@mui/material/FormControl';

const Step2Content = ({
  year,
  setYear,
  month,
  setMonth,
  day,
  setDay,
  identity,
  setIdentity,
  grade,
  setGrade,
  school,
  setSchool,
}) => {
  useEffect(() => {
    createYearOptions();
    createDayOptions();
  }, []);

  // year option 목록 생성
  function createYearOptions() {
    const years = Array.from({ length: 75 }, (_, index) => 2023 - index);
    const yearOptions = years.map((year) => (
      <option key={`year-${year}`} value={year}>
        {year} 년
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

  return (
    <div>
      {/* <h1>Step 2의 내용: 이곳에는 Step 2의 내용이 표시됩니다.</h1> */}

      {/* 생년월일 */}
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
          //  onClick={createYearOptions}
          onChange={(e) => {
            console.log(e.target.value);
            setYear(e.target.value);
          }}
          value={year}
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
          onChange={(e) => {
            setMonth(e.target.value);
          }}
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
          onChange={(e) => {
            setDay(e.target.value);
          }}
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
              onChange={(e) => {
                setIdentity(e.target.value);
              }}
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
            {
              identity === "none"

              ? 
                <select
                  disabled
                  className="selectWrap"
                  id="grade"
                  onChange={(e) => {
                    setGrade(e.target.value);
                    
                  }}
                  value={grade}
                >
                  <option value="0">학년</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년</option>
                  <option value="5">5학년</option>
                  <option value="6">6학년</option>
                </select>
             :
              <select
                className="selectWrap"
                id="grade"
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
                value={grade}
              >
                <option value="0">학년</option>
                <option value="1">1학년</option>
                <option value="2">2학년</option>
                <option value="3">3학년</option>
                <option value="4">4학년</option>
                <option value="5">5학년</option>
                <option value="6">6학년</option>
              </select>
            
            }
            
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
