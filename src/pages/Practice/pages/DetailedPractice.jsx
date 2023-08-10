import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

import Practice from "../pages/Practice";
//창작물 데이터 


function DetailedPractice () {
  const { idx } = useParams(); // /practicelist/:idx와 동일한 변수명으로 데이터를 꺼내기
  const [loading, setLoading] = useState(true);
  const [practice, setPractice] = useState({});

  const getPractice = async () => {
    const resp = await (await axios.get(`//localhost:3000/practicelist/${idx}`)).data;
    setPractice(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getPractice();
  }, []);


  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Practice
          idx={practice.idx}
          title={practice.title}
          tags={practice.tags}
          type={practice.type}
          story={practice.story}
          review={practice.review}
          createdBy={practice.createdBy}
        />
      )}
    </div>
  );
};

export default DetailedPractice;