import React from 'react';
import {Box, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from "@mui/material/styles";


// 창작마루 네비게이션 바 - 영상,이미지,음성,문서 
// PracticeList에서 창작물 유형 정보 (page) 전달받음
const StyledBox = styled(Box)({
  marginTop: '2rem',
  marginBottom: '1rem',
})
const StyledTypography = styled(Typography)({
  marginBottom: '1rem'
})
//
const StyledGroup = styled(ToggleButtonGroup)({
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
  width: '80%',

})


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

  
  // 전체 토글 버튼 
  const StyledButton = styled(ToggleButton)({
    width: '25%',
    height: '3rem',
    fontWeight: 'bold',
    fontSize: '1rem'
  })
  // 기본 버튼 
  const buttonStyle = {
    backgroundColor: '#FFF5E5',
    border: 'none',
    color: 'black',
    
  };
  //select된 버튼 색상 변경됨
  const selectedButtonStyle = {
    backgroundColor: '#C5E1A5', 
  };

  return (
    <StyledBox>
      <StyledTypography textAlign="center" variant="h4" >창  작  마  루</StyledTypography>
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

    </StyledBox>
    
  );
}
