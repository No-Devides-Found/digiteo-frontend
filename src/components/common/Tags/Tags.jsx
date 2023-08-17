import * as React from 'react';

import { TextField,Autocomplete, Box } from '@mui/material';



// 유형에 맞는 프로그램 목록들 : programs 
// 검색할 태그 상태값 : searchTags, setSearchTags
export default function Tags({programs, searchTags, setSearchTags}) {
  // 창작마루 리스트 프로그램 태그 선택 -> 검색과 같음
  
  
  const handleTagChange = (event, newValue) => {

    setSearchTags(
      
      )
    console.log(searchTags)
    // setPractice((prevPractice) => ({
    //   ...prevPractice, 
    //   tags: newValue,
    // }));
  };

  return (
    <Box style={{width:"80%"}}>
        <Autocomplete
          multiple
          //limitTags={5}
          id="multiple-limit-tags"
          name="tags"
          options={programs}          
          value={programs} 
          onChange={handleTagChange}
          getOptionLabel={(option) => option}
          
          renderInput={(programs) => (
            <TextField 
            {...programs} 
            label="프로그램 선택" placeholder="프로그램 선택"
            
            />
          )}
        
        />
    </Box>
    
  );
}


