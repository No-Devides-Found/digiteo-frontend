import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages"; 
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import PracticeMain from "./pages/Practice/PracticeMain";
import PracticeList from "./pages/Practice/PracticeList";
import ImgPractice from './pages/Practice/ImgPractice';
import VideoPractice from './pages/Practice/VideoPractice';
import VoicePractice from './pages/Practice/VoicePractice' ;
import TextPractice from './pages/Practice/TextPractice';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">메인홈</Link> 
        <Link to="/signin">로그인</Link>  
        <Link to="/signup">회원가입</Link> 
        <Link to="/practicehome">창작마루</Link> 
        <Link to="/practicelist">창작마루목록</Link> 
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />   
        <Route path="/practicehome" element={<PracticeMain/>} />   
        <Route path="/practicelist" element={<PracticeList/>} />

        <Route path="/imgpractice" element={<ImgPractice/>} />  
        <Route path="/videopractice" element={<VideoPractice/>} />  
        <Route path="/textpractice" element={<TextPractice/>} />  
        <Route path="/voicepractice" element={<VoicePractice/>} />  
      </Routes>
      

    </div>
  );
}

export default App;
