import People from './components/people';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/people" element={<People/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;