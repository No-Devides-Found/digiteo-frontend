import React, {useEffect, useState} from 'react';
import axios from "axios";

import { Link,  Navigate, useNavigate, useLocation , useParams} from 'react-router-dom';



import {Box, Grid, Container} from '@mui/material';

import ListTemplate from "./ListTemplate";
import CreationTemplate from "./CreationTemplate";
import PracticeNavbar from "./PracticeNavbar";
import SearchBar from './../../components/SearchBar/SearchBar';

import Paginations from './../../components/Paginations/Paginations';




export default function PracticeList() {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageType = params.get('param1'); //페이지이름
  

  const [page,setPage]=useState(pageType)
  
  const navigate = useNavigate();
  
  const moveToWrite = () => {
    navigate('/postpractice');
  };
  
  const [practiceList, setPracticeList] = useState([]);
  // const getPracticeList = async () => {
  //   try{
  //     const resp = (await axios.get('/practicelist')).data ////localhost:3000/practicelist
  //   setPracticeList(resp.data);  //practiceList 변수에 할당
    

  //   }catch (error) {
  //   console.error('Error fetching practice list:', error);
  //   }
  // }
  
  // useEffect(() => {
  //   getPracticeList(); //창작물 목록 조회 함수 호출
  // }, []); 



  
  return (
    <React.Fragment>
      <PracticeNavbar page={page} setPage={setPage} pageType={pageType}></PracticeNavbar>

      {/* <ul>
        {practiceList.map((practice)=>(
          <li key={practice.idx}>
            <CreationTemplate practice={practice} />
          </li>
          
        ))}
      </ul> */}
      {/* <Container>
        <Grid container >
          <Grid item xs={12}>
          여기 SearchBar <SearchBar/>
          </Grid>
          <Grid item xs={8}>
          여기 태그선택
          </Grid>
          <Grid item xs={4}>
            여기 정렬
          </Grid>
          <Grid item xs={12}>
            여기 리스트 목록
          </Grid>
          <Grid item xs={12}>
            <button onClick={moveToWrite}>창작물 올리기</button>
          </Grid>
          <Grid item xs={12}>
            <Paginations/>
          </Grid>
        </Grid>
      </Container> */}
      
      <ListTemplate/>
      
    </React.Fragment>
  );
}
