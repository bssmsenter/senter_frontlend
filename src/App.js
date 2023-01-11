import People from './components/people';
import Home from './components/home';
import Age from './components/age'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/age" element={<Age/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;