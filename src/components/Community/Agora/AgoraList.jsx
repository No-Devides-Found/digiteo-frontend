import React from 'react';
import { Container, Grid , Box, Button, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import {AgoraTemplate, QandATemplate} from '../../../components';


function AgoraList({page, posts}) {
  
  const agoras = [
    {
      id:"",
      title:"",
      type:"",
      liked:"",
      participants:"",
      created_at:""
    },
    {
      id:"",
      title:"",
      type:"",
      liked:"",
      participants:"",
      created_at:""
    },
    {
      id:"",
      title:"",
      type:"",
      liked:"",
      participants:"",
      created_at:""
    },
    {
      id:"",
      title:"",
      type:"",
      liked:"",
      participants:"",
      created_at:""
    },
  ]



  const qas = [
    {
      id:"",
      title:"",
      liked:"",
      comments:"",
      created_at:""
    },
    {
      id:"",
      title:"",
      liked:"",
      comments:"",
      created_at:""
    },
    {
      id:"",
      title:"",
      liked:"",
      comments:"",
      created_at:""
    },
    {
      id:"",
      title:"",
      liked:"",
      comments:"",
      created_at:""
    },
  ]


  return (
    <div>
    {
      page ==="agora"
      ?
      <Grid container style={{margin:"0 auto", display:"flex", }}>
      
      {agoras.map((agora, index) => (
         <Grid item xs={4} mt={3}  >
          <AgoraTemplate   
          agora={agora}
          style={{width: "90%", display:"block", margin:"0 auto"}}/>  
          </Grid>
      ))}
      </Grid>

      : 

      <Grid container style={{margin:"0 auto", display:"flex", }}>
      {qas.map((qa, index) => (
        <Grid item xs={12} mt={3} >
          <QandATemplate 
          qa={qa}
          style={{width: "100%", display:"block", margin:"0 auto"}} />
          </Grid>
      ))}
      </Grid>
      
    }
    
    </div>
  );
};

export default AgoraList;