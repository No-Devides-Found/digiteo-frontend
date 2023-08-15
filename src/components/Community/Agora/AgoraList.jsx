import React from 'react';
import { Container, Grid , Box, Button, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import {AgoraTemplate, QandATemplate} from '../../../components';


function AgoraList({page}) {
  return (
    <Container>
      {
        page==="agora"
        ? <AgoraTemplate/>
        : <QandATemplate/>
      }
      
    </Container>
  );
};

export default AgoraList;