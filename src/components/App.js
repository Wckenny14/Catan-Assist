import { Routes, Route } from "react-router-dom";
import MapGenerator from '../pages/MapGenerator';
import ScoreTracker from '../pages/ScoreTracker'
import Home from '../pages/Home.jsx';
import CustomScore from '../pages/CustomScore.jsx';
import './App.css'

const App = () => {

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mapGenerator" element={<MapGenerator />} />
          <Route path="/standardScore" element={<ScoreTracker />} />
          <Route path="/customScore" element={<CustomScore />} />
        </Routes>
    </div>
  )}

export default App;
