import React from 'react';

import {Grid} from '@mui/material';
import { styled } from "@mui/material/styles";
import PracticeNavbar from '../PracticeNavbar';
import ListTemplate from '../ListTemplate';



function ImgPractice() {
  const pageName="img"; 

  return (
    <React.Fragment>
      <PracticeNavbar pageName={pageName}></PracticeNavbar>
      <ListTemplate />
      
    </React.Fragment>
  );
};

export default ImgPractice;





