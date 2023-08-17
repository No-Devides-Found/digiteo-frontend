import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Tags({ programs, value, onChange}) {
  const [selectedTags, setSelectedTags] = React.useState([]);

  const handleChange = (event, newValues) => {
    setSelectedTags(newValues);
    onChange(newValues);
  };
  
  console.log(selectedTags); // 선택한 태그 배열 확인용
  
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={programs}
      value={selectedTags}
      onChange={handleChange}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} placeholder="관련 프로그램을 선택해주세요." />
      )}
      sx={{ width: '100%' }}
    />
  );
}

export default Tags;