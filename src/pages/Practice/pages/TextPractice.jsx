import React from 'react';
import PracticeNavbar from '../PracticeNavbar';
import ListTemplate from '../ListTemplate';

function TextPractice() {
  const pageName="text";

  return (
    <React.Fragment>
      <PracticeNavbar pageName={pageName}></PracticeNavbar>
      <ListTemplate />
      
    </React.Fragment>
  );
};

export default TextPractice;