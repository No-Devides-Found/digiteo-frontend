import React, {useState} from 'react';
import axios from "axios";

import { useNavigate, useLocation} from 'react-router-dom';




import ListTemplate from "./ListTemplate";

import PracticeNavbar from "./PracticeNavbar";




export default function PracticeList() {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageType = params.get('param1'); //페이지이름
  

  const [page,setPage]=useState(pageType)
  
  const navigate = useNavigate();
  
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
      
      <ListTemplate/>
      
    </React.Fragment>
  );
}