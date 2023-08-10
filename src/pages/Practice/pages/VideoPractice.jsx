import React from 'react';
import {Box} from '@mui/material';
import PracticeNavbar from '../PracticeNavbar';
import ListTemplate from '../ListTemplate';

function VideoPractice() {
  const pageName= "video"; 

  return (
    <React.Fragment>
      <PracticeNavbar pageName={pageName}></PracticeNavbar>
      <ListTemplate />
      
    </React.Fragment>
  );
};

export default VideoPractice;