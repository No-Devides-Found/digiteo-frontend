import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import {Box} from '@mui/material';

import ListTemplate from "./ListTemplate";
import PracticeNavbar from "./PracticeNavbar";




export default function PracticeList() {

  
  return (
    <Box>
      <h1>창작마루 목록 템플릿</h1>
      <PracticeNavbar />

      <ListTemplate/>
    </Box>
  );
}
