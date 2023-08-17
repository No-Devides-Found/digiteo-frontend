import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { styled } from '@mui/material/styles';
import './Paginations.css';


function Paginations() {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };


  return (
    <Pagination
    
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={50}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange} 
  />

  );
}

export default Paginations; 
