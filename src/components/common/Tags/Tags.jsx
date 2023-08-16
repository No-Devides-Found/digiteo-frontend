import * as React from 'react';

import { TextField,Autocomplete, Box } from '@mui/material';




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
          //style={{"&.MuiAutocomplete-tag":{backgroundColor:"#E0F7FA"}}}
          renderInput={(params) => (
            <TextField {...params} label="프로그램 선택" placeholder="프로그램 선택" 
            />
          )}
          sx={{ }}
  
        />
    </Box>
    
  );
}


