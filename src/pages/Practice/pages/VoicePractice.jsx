import React from 'react';
import {Box} from "@mui/material";
import PracticeNavbar from '../PracticeNavbar';
import ListTemplate from '../ListTemplate';


function VoicePractice() {
  const pageName= "voice"; 

  return (
    <React.Fragment>
      <PracticeNavbar pageName={pageName}></PracticeNavbar>
      <ListTemplate />
      
    </React.Fragment>
  );
};

export default VoicePractice;