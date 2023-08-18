import React from 'react';
import { Container, Grid , Box, Button, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import {LeftList, Chips, Dropdown, TipTemplate} from '../../../components';

// 나눔터 - 팁 리스트 
function TipList() {
  // 조건에 맞는 팁노하우 목록을 가져와야 함
  
  //ex 제목, 작성자, 팁내용, 좋아요 개수, 작성일자 필요
  const tips = [
    {
      title:"tip title",
      auth:"작성자",
      content:"팁 내용",
      likes:"좋아요 개수",
      date:"2023-01-01"
    },
    {
      title:"tip title",
      auth:"작성자",
      content:"팁내용",
      likes:"좋아요개수",
      date:"2023-01-01"
    },
    {
      title:"tip title",
      auth:"작성자",
      content:"팁내용",
      likes:"좋아요개수",
      date:"2023-01-01"
    },
    {
      title:"tip title",
      auth:"작성자",
      content:"팁내용",
      likes:"좋아요개수",
      date:"2023-01-01"
    },
    {
      title:"tip title",
      auth:"작성자",
      content:"팁내용",
      likes:"좋아요개수",
      date:"2023-01-01"
    },
  ]




  return (
    <div>
      <Grid container style={{margin:"0 auto", display:"flex", }}>
      {tips.map((tip, index) => (
        <Grid item xs={4} mt={3} >
          <TipTemplate
          tip={tip}
          style={{width: "80%", display:"block", margin:"0 auto"}} />
          </Grid>
      ))}
      </Grid>


    </div>
  );
};

export default TipList;