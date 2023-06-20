import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './homePage/homePage.jsx'
import PageOne from './pageOne/pageOne.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/page1" element={<PageOne />} />
      </Routes>
    </Router>
  );
}

export default App
