import React from "react";
import LandingPage from "./screens/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import News from "./screens/News";
import Events from "./screens/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/news" element={<News/>}/>
        <Route  path="/events" element={<Events/>}/>
      </Routes>
    </Router>
  );
}

export default App;
