import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import {Box, Container} from '@mui/material';

import ListTemplate from "./ListTemplate";
import CreationTemplate from "./CreationTemplate";
import PracticeNavbar from "./PracticeNavbar";




export default function PracticeList() {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageType = params.get('param1'); //페이지이름

  const [page,setPage]=useState(pageType)
  

  const [practiceList, setPracticeList] = useState([]);
  const navigate = useNavigate();
  

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

  const moveToWrite = () => {
    navigate('/postpractice');
  };

  
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
      <div>
        <button onClick={moveToWrite}>창작물 올리기</button>
      </div>
    </React.Fragment>
  );
}
