import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import LawNews from './components/LawNews';
// import other components...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/law-news" element={<LawNews />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
