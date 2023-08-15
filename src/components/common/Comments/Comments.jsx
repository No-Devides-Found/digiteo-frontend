import React, {useState} from 'react';

import {Box, Button, FormControl,  TextField, } from '@mui/material'; 



export default function Comments() {

  const [comment, setComment] = useState('');
  
  return (
    <FormControl>
      <TextField
        multiline
        placeholder="댓글을 작성해보세요. (200자 이내)"
        rows={6}
        sx={{ width: '40rem' ,}}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type='submit' sx={{ width: '5rem' }}
        >
          올리기
        </Button>
      </Box>
    </FormControl>
  );
}
