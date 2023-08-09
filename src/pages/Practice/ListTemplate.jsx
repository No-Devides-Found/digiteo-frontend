import React from 'react';
import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles";

// import {Dropdown, SearchBar} from '../../components/';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBar from '../../components/SearchBar/SearchBar';
import ChoiceButton from '../../components/ChoiceButton/ChoiceButton';
import Tags from '../../components/Tags/Tags';

import CreationTemplate from './CreationTemplate';

const MainGrid = styled(Grid)({
  display: 'block',
  margin: '0 auto',
  padding: '2rem',
  width: '80rem',
  backgroundColor: 'skyblue',
  textAlign: 'center',
})
const SubGrid = styled(Grid)({

})


const choices = ["제목+닉네임", "제목", "닉네임"]


function ListTemplate () {
  return (
      <MainGrid container direction={'row'}>
        <SubGrid item>
          <ChoiceButton choices={choices}/> 
          <SearchBar/>
        </SubGrid>

        <SubGrid item>
            <Tags/>
            <Dropdown/>

        </SubGrid>

        <SubGrid item>
            <CreationTemplate/>
        </SubGrid>

        <SubGrid item>
          창작물 올리기 버튼
        </SubGrid>
      </MainGrid>

  );
};

export default ListTemplate;