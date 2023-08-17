
import React, {useState} from 'react';
import { Grid , Box, Button ,Typography ,Stack} from '@mui/material';
import { styled } from "@mui/material/styles";

// import {Dropdown, SearchBar} from '../../components/';
import Dropdown from '../common/Dropdown/Dropdown';
import SearchBar from '../common/SearchBar/SearchBar';
import Tags from '../common/Tags/Tags';
import Paginations from '../common/Paginations/Paginations'; 
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


// 창작마루 네비게이션 바 - 영상,이미지,음성,문서 
// PracticeList에서 창작물 유형 정보 (page) 전달받음


// 네브바 전체 그룹
const StyledGroup = styled(ToggleButtonGroup)({
  display: 'block',
  borderRadius:"20px",
  margin: '0 auto',
  textAlign: 'center',
  width: '100%',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  background: '#FFBCBC',
})
// 전체 토글 버튼 
const StyledButton = styled(ToggleButton)({
  width: '25%',
  height: '3rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  borderRadius: '20px',
})
// 기본 버튼 
const buttonStyle = {
  background: '#FFBCBC',
  border: 'none',
  color: 'black',
};
//select된 버튼 색상 변경됨
const selectedButtonStyle = {
  backgroundColor: '#FFEBEE', 
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  borderRadius:"30px",
  height:"fit-content",
};



export default function PracticeNavbar({ page, setPage}) {
  //네브바 토글 관련 상태값 
  const [alignment, setAlignment] = React.useState(page); 

  // 네브바 토글
  const handleChange = (e) => {
    setAlignment(e.target.value);    
    console.log(alignment)
  };

  // 페이지 정보 연결
  const onClick = (e) => {
    setPage(e.target.value);
  }
  
  return (
      <Grid container>
        {/* 토글 네브바  */}
        <Grid item xs={12} mt={9}>
            <StyledGroup
            variant="soft"
            size="lg"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <StyledButton
              value="video"
              onClick={onClick}
              selected={alignment === "video"}
              style={alignment === "video" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              영상 창작물
            </StyledButton>
            <StyledButton
              value="img"
              selected={alignment === "img"}
              style={alignment === "img" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              이미지 창작물
            </StyledButton>
            <StyledButton
              value="voice"
              selected={alignment === "voice"}
              style={alignment === "voice" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              음성 창작물
            </StyledButton>
            <StyledButton
              value="text"
              selected={alignment === "text"}
              style={alignment === "text" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              문서 창작물
            </StyledButton>
          </StyledGroup>
        </Grid>
    </Grid>
  );
}
