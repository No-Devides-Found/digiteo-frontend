import * as React from 'react';
import {Box, Chip} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from '@mui/material/styles';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

// 선택한 프로그램 태그칩
export default function Chips({chips}) {
  const tags = ['tag1', 'tag2', 'tag3'];
  console.log(tags)

  return (
    <Box
      sx={{
        display: 'flex',
        //justifyContent: 'center',  
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
     {chips && chips.map((chip, index) => (
        <ListItem key={index}>
          <Chip label={chip} />
        </ListItem>
      ))}
    </Box>
  );
}