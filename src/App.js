import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Signin, Signup } from "./pages";
import { Header, NavBar } from "./components";
import PracticeHome from "./pages/Practice/PracticeHome";
import PracticeList from "./pages/Practice/PracticeList";

import Practice from './pages/Practice/pages/Practice';

import PostPractice from './pages/Practice/pages/PostPractice';
import DetailedPractice from './pages/Practice/pages/DetailedPractice';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />   
        <Route path="/practicehome" element={<PracticeHome/>} />   
        <Route path="/practicelist" element={<PracticeList/>} />
        <Route path="/practicelist/:idx" element={<DetailedPractice/>} />

        <Route path="/practice" element={<Practice/>} />  

        
        <Route path="/postpractice" element={<PostPractice/>} />   
        

      </Routes>
    </div>
  );
}

export default App;
