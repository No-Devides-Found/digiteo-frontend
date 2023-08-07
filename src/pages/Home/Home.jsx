import React from "react";

import { EventCarousel } from "../../components";
import Program from "../../components/Program/Program"; 

//프로그램 컴포넌트 테스트
const programProps = {
  image: "/asset/thumbnail.jpg",
  alt: "썸네일 이미지",
  title: "프로그램 대제목",
  info: "프로그램 설명",
  button1: "참여 인원",
  button2: "별점"
};

function Home() {
  return (
    <div>
      홈페이지
      <EventCarousel />
      <Program {...programProps}/>
    </div>
  );
}

export default Home;
