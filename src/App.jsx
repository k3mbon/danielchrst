import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import WorkTimeline from './pages/WorkTimeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkTimeline />} />
          </Routes>
        </Router>
    <Footer/>
    </div>
    
  );
}

export default App;
