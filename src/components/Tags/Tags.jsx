import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Grid, Box } from '@mui/material';
import { styled } from "@mui/material/styles";



export default function Tags({programs, tags, setPractice}) {
  const handleTagChange = (event, newValue) => {
    setPractice((prevPractice) => ({
      ...prevPractice, 
      tags: newValue,
    }));
  };

  return (
    <Box>
        <Autocomplete
          multiple
          limitTags={5}
          id="multiple-limit-tags"
          name="tags"
          options={programs}
          value={tags}
          onChange={handleTagChange}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} label="프로그램 선택" placeholder="프로그램 선택" />
          )}
          sx={{ width: '700px', margin: '0' }}
        />
    </Box>
    
  );
}


