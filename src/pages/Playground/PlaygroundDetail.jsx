import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../constants";

function PlaygroundDetail() {
  let { id } = useParams();
  const [program, setProgram] = useState();
  

  useEffect(() => {
    axios.get(`${server}/programs/program/${id}/`).then((res) => {
      console.log(res.data);
    });
  }, []);

  console.log(program); 

  return <>디테일페이지데스</>;
}

export default PlaygroundDetail;


