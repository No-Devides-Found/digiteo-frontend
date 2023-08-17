import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Tags({ programs }) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={programs}
      getOptionLabel={(option) => option}
      defaultValue={[programs[0], programs[1], programs[2]]}
      renderInput={(params) => (
        <TextField {...params} placeholder="관련 프로그램을 선택해주세요." />
      )}
      sx={{ width: '100%' }}
    />
  );
}

export default Tags;