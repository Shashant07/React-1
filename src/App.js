import './App.css';

import { Routes, Route } from "react-router-dom";
import HomeComp from './components/homeComp/HomeComp';
import AboutComp from './components/aboutComp/AboutComp';
import NotFoundComp from './components/notFoundComp/NotFoundComp';
import SidebarComp from './components/sidebarComp/SidebarComp';

function App() {
  return (
    <div className="App">
      <SidebarComp />
      <Routes>
        <Route exact path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp/>} />
        <Route path="*" element={<NotFoundComp />} />
      </Routes>
    </div>
  );
}

export default App;
