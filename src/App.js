import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Tour from './pages/Tour'
import SearchAppBar from "./components/AppBar";
import UnderstandingBreakpoints from "./components/UnderstandingBreakpoints"
import ComplexGrid from "./components/ComplexGrid";
import MediaQuery from "./components/MediaQuery";

function App() {
  return (
  <BrowserRouter>
    <SearchAppBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Tour/>}/>
      <Route path="/break" element={<UnderstandingBreakpoints/>}/>
      <Route path="/complex" element={<ComplexGrid/>}/>
      <Route path="/mediaquery" element={<MediaQuery/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
