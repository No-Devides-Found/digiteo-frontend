import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Signin, Signup } from "./pages";
import { Header, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
