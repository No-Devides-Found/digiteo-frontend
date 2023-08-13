import * as React from 'react';
import {Box, Chip} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from '@mui/material/styles';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Chips() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: '프로그램명1' },
    { key: 1, label: '프로그램명2' },
    { key: 2, label: '프로그램명3' },
    { key: 3, label: '프로그램명4' },
    { key: 4, label: '프로그램명5' },
  ]);



  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
             // onDelete={<DoneIcon/>}
              label={data.label}
             // deleteIcon={<DoneIcon />}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}