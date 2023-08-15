import * as React from 'react';
import {  useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';





function LeftList({page}) {
  console.log(page); // 배움터 or 나눔터

  const [selectedIndex, setSelectedIndex] = React.useState(page);
  const navigate = useNavigate();


    
  //나눔터 or 배움터로 이동
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if(index === "tip"){
      navigate('/tip'); 
    }else{
      navigate('/agora');
    }
  };
 

  return (
    <Box sx={{ width: '100%', maxWidth: '20rem', bgcolor: 'orange' ,}}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
        >
          <ListItemText primary="커뮤니티" />
        </ListItemButton>

      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 'agora'}
          onClick={(event) => handleListItemClick(event, 'agora')}
        >
          <ListItemText primary="배움터" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 'tip'}
          onClick={(event) => handleListItemClick(event, 'tip')}
        >
          <ListItemText primary="나눔터" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default LeftList;