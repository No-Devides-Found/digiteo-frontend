import React from 'react';
import { Container, Grid , Box, Button, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import {LeftList, Chips, Dropdown, AgoraTemplate} from '../../components';


function AgoraList() {
  return (
    <Container>
      토의토론 리스트
      <AgoraTemplate/>


    </Container>
  );
};

export default AgoraList;