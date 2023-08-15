import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {Box, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from "@mui/material/styles";

export default function PracticeNavbar({ page, setPage}) {
  
  const [alignment, setAlignment] = React.useState(page);
  console.log(alignment)


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    
  };
  const onClick = (e) => {
    setPage(e.target.value);
  }

  const StyledBox = styled(Box)({
    marginTop: '2rem',
    marginBottom: '1rem',
  })
  const StyledTypography = styled(Typography)({
    marginBottom: '1rem'
  })
  const StyledGroup = styled(ToggleButtonGroup)({
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    width: '60rem',

  })
  const StyledButton = styled(ToggleButton)({
    width: '10rem',
    height: '3rem',
    fontWeight: 'bold',
    fontSize: '1rem'
  })

  const buttonStyle = {
    backgroundColor: '#FFF5E5',
    border: 'none',
    color: 'black',
    
  };

  const selectedButtonStyle = {
    backgroundColor: '#C5E1A5', // 선택 시 색상 변경
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
