// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Ticker from './components/Ticker';
// import AboutSection from './components/AboutSection';
// import Modules from './components/Modules';
// import RecentUpdates from './components/RecentUpdates';
// import Footer from './components/Footer';
// import Signup from './components/Signup';  // Import Signup component
// import CaseHistories from './components/CaseHistories';  // ✅ Import CaseHistories Component
// import KnowYourRightsPage from './components/KnowYourRightsPage';  // Ensure this path is correct
// import StateDetailsPage from './components/StateDetailsPage';  // Ensure this path is correct
// import './App.css';  

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Ticker />
      
//       {/* Define Routes */}
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <>
//               <AboutSection />
//               <Modules />
//               <RecentUpdates />
//             </>
//           } 
//         />
        
//         {/* Add Signup Page Route */}
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Route to Case Histories Page */}
//         <Route path="/case-histories" element={<CaseHistories />} />
        
//         {/* Route to Know Your Rights Page */}
//         <Route path="/know-your-rights" element={<KnowYourRightsPage />} />

//         {/* Dynamic Route for State Details */}
//         <Route path="/state/:id" element={<StateDetailsPage />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Ticker from './components/Ticker';
// import AboutSection from './components/AboutSection';
// import Modules from './components/Modules';
// import RecentUpdates from './components/RecentUpdates';
// import Footer from './components/Footer';
// import Signup from './components/Signup';
// import CaseHistories from './components/CaseHistories';
// import KnowYourRightsPage from './components/KnowYourRightsPage';
// import StateDetailsPage from './components/StateDetailsPage';
// import Templates from './components/Temp';  // ✅ Import Templates Component
// import './App.css';  

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Ticker />
      
//       {/* Define Routes */}
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <>
//               <AboutSection />
//               <Modules />
//               <RecentUpdates />
//             </>
//           } 
//         />
        
//         {/* Add Signup Page Route */}
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Route to Case Histories Page */}
//         <Route path="/case-histories" element={<CaseHistories />} />
        
//         {/* Route to Know Your Rights Page */}
//         <Route path="/know-your-rights" element={<KnowYourRightsPage />} />

//         {/* Dynamic Route for State Details */}
//         <Route path="/state/:id" element={<StateDetailsPage />} />

//         {/* ✅ Add Route for Templates Page */}
//         <Route path="/templates" element={<Templates />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Ticker from './components/Ticker';
import AboutSection from './components/AboutSection';
import Modules from './components/Modules';
import RecentUpdates from './components/RecentUpdates';

import RecentUpdatesDetails from "./components/RecentUpdatesDetails";
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import LawNews from './components/LawNews';
import CaseHistories from './components/CaseHistories';
import KnowYourRightsPage from './components/KnowYourRightsPage';
import StateDetailsPage from './components/StateDetailsPage';
import Temp from './components/Template';  // ✅ Import Temp Component
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Ticker />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <AboutSection />
              <Modules />
              <RecentUpdates />
            </>
          } 
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/law-news" element={<LawNews />} />
        <Route path="/case-histories" element={<CaseHistories />} />
        <Route path="/know-your-rights" element={<KnowYourRightsPage />} />
        <Route path="/state/:id" element={<StateDetailsPage />} />
        {/* <Route path="/" element={<Home />} /> */}
    <Route path="/recent-updates" element={<RecentUpdates />} />
    <Route path="/recent-updates/:id" element={<RecentUpdatesDetails />} />

        {/* ✅ Route for Templates Page */}
        <Route path="/templates" element={<Temp />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import LawNews from './components/LawNews';
// // import other components...

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/law-news" element={<LawNews />} />
//         {/* other routes */}
//       </Routes>
//     </Router>
//   );
// }



// export default App;
