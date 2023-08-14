import * as React from 'react';

import {Box, ToggleButton, ToggleButtonGroup, Button, 
  FormControl,  TextField, } from '@mui/material'; 



export default function AgoraComments( ) {
  const [choice, setChoice] = React.useState("yes");  //찬반 선택
  const [comment, setComment] = React.useState("");  

  const handleChange = (event, newChoice) => {
    setChoice(newChoice);
  };
  const onChangeComment=(e)=>{
    setComment(e.target.value)
  }
  const regComment = (e) => {
    setComment("")
  }

  return (
    <FormControl>
      <div style={{textAlign:'left'}}>댓글 {'('}총~개{')'}  </div>
      <ToggleButtonGroup
      color="primary"
      value={choice}
      exclusive
      onChange={handleChange}
      aria-label="Platform"      
    >
      <ToggleButton value="yes" style={{width:'50%'}} >
        찬성
      </ToggleButton>
      <ToggleButton value="no" style={{width:'50%'}}>
        반대
      </ToggleButton>
    </ToggleButtonGroup>


      <TextField
        multiline
        value={comment}
        onChange={onChangeComment}
        placeholder="의견을 작성해보세요. (1000자 이내)"
        rows={6}
        sx={{ width: '40rem' ,}}
      />

      <Box display="flex" justifyContent="flex-end">
        <Button type='submit' sx={{ width: '5rem'}}
          onClick={regComment}
        >
          올리기
        </Button>
      </Box>
    </FormControl>
  );
}
