import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)({
  marginTop: '2rem',
  marginRight: '2rem',
  display: 'inline-block',
})

export default function Tags() {
  return (
    <StyledGrid>
        <Autocomplete
          multiple
          limitTags={5}
          id="multiple-limit-tags"
          options={programs}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => ( 
            <TextField {...params} label="프로그램 선택" placeholder="프로그램 선택" />
          )}
          sx={{ width: '650px' }}
        />
    </StyledGrid>
    
  );
}



const programs = [
  '프로그램명1',
  '프로그램명2', 
  '프로그램명3', 
  '프로그램명4', 
  '프로그램명5', 
  '프로그램명6', 
  '프로그램명7', 
];
