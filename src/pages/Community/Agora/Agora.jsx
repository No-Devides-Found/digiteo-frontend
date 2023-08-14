import React from 'react';
import { Container, Grid , Box, Button} from '@mui/material';
import { styled } from "@mui/material/styles";
import {LeftList} from '../../../components';

const Agora = () => {
  const page = 'agora'; 

  return (
    <Container>
      <LeftList page={page}/>
      

    </Container>
  );
};

export default Agora;