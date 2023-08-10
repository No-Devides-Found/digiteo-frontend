import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import PracticeHome from "./pages/Practice/PracticeHome";
import PracticeList from "./pages/Practice/PracticeList";

import ImgPractice from './pages/Practice/pages/ImgPractice';
import VideoPractice from './pages/Practice/pages/VideoPractice';
import VoicePractice from './pages/Practice/pages/VoicePractice' ;
import TextPractice from './pages/Practice/pages/TextPractice';
import PostPractice from './pages/Practice/pages/PostPractice';
import DetailedPractice from './pages/Practice/pages/DetailedPractice';


import NavBar from "./components/NavBar/NavBar";
import TestBar from "./components/NavBar/test";



function App() {
  return (
    <div className="App">
      

      <nav>
        <Link to="/">메인홈</Link>
        <Link to="/signin">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/practicelist">창작물리스트</Link>
      </nav>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />   
        <Route path="/practicehome" element={<PracticeHome/>} />   
        <Route path="/practicelist" element={<PracticeList/>} />
        <Route path="/practicelist/:idx" element={<DetailedPractice/>} />

        <Route path="/imgpractice" element={<ImgPractice/>} />  
        <Route path="/videopractice" element={<VideoPractice/>} />  
        <Route path="/textpractice" element={<TextPractice/>} />  
        <Route path="/voicepractice" element={<VoicePractice/>} />
        <Route path="/postpractice" element={<PostPractice/>} />   
        

      </Routes>
    </div>
  );
}

export default App;
