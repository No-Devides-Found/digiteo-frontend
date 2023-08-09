import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled} from "@mui/material/styles";

export default function PracticeNavbar() {
  const [alignment, setAlignment] = React.useState('video');


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="video" href="/videopractice" >영상 창작물</ToggleButton>
      <ToggleButton value="img" href="/imgpractice">이미지 창작물</ToggleButton>
      <ToggleButton value="voice" href="/voicepractice">음성 창작물</ToggleButton>
      <ToggleButton value="text" href="/textpractice">문서 창작물</ToggleButton>
    
    </ToggleButtonGroup>
  );
}
