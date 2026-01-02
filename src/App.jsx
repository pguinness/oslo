import { Routes, Route } from "react-router-dom";
import MoodReset from './components/MoodReset';

import Home from "./pages/Home";
import Video from "./pages/Video";
import Map from "./pages/Map";

import "./App.css";

const App = () => {
    return (
        <>
            <MoodReset />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video" element={<Video />} />
                <Route path="/map" element={<Map />} />
            </Routes>
        </>
    );
};

export default App;
