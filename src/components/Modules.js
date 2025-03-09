// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Modules.css'; // Make sure to include your CSS file

// const Modules = () => {
//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <Link to="/know-your-rights" className="read-more-link">Read More</Link>
//         </div>
//       </div>

//       {/* Special Design for Digital Assistance */}
//       <div className="module digital-assistance">
//   <img src="chatbot.png" alt="Digital Icon" />
//   <div className="module-info">
//     <h2>Digital Assistance</h2>
//     <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//     <a href="#" className="read-more-link">Discover Tools</a>
//   </div>
// </div>


//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Legal Templates</h2>
//           <p>Get Legal Templates for Legal Agreements.</p>
//           <a href="#" className="read-more-link">Get Templates</a>
//         </div>
//       </div>

//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Modules.css';

// const Modules = () => {
//   const [showChatbot, setShowChatbot] = useState(false);

//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <Link to="/know-your-rights" className="read-more-link">Read More</Link>
//         </div>
//       </div>

//       {/* Digital Assistance Module */}
//       <div className="module digital-assistance">
//         <img src="chatbot.png" alt="Digital Icon" />
//         <div className="module-info">
//           <h2>Digital Assistance</h2>
//           <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//           <button className="read-more-link" onClick={() => setShowChatbot(!showChatbot)}>
//             Discover Tools
//           </button>
//         </div>
//       </div>

//       {/* Chatbot Modal */}
//       {showChatbot && (
//         <div className="chatbot-modal">
//           <div className="chatbot-content">
//             <button className="close-btn" onClick={() => setShowChatbot(false)}>✖</button>
//             <iframe src="http://localhost:8501/" width="100%" height="500px"></iframe>
//           </div>
//         </div>
//       )}

//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Legal Templates</h2>
//           <p>Get Legal Templates for Legal Agreements.</p>
//           <a href="#" className="read-more-link">Get Templates</a>
//         </div>
//       </div>

//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Modules.css';

// const Modules = () => {
//   const openChatbot = () => {
//     window.open("http://localhost:8501/", "_blank", "width=800,height=600");
//   };

//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <Link to="/know-your-rights" className="read-more-link">Read More</Link>
//         </div>
//       </div>

//       {/* Digital Assistance Module */}
//       <div className="module digital-assistance">
//         <img src="chatbot.png" alt="Digital Icon" />
//         <div className="module-info">
//           <h2>Digital Assistance</h2>
//           <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//           <button className="read-more-link" onClick={openChatbot}>Discover Tools</button>
//         </div>
//       </div>

//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Legal Templates</h2>
//           <p>Get Legal Templates for Legal Agreements.</p>
//           <a href="#" className="read-more-link">Get Templates</a>
//         </div>
//       </div>

//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;




// import React from "react";
// import { Link } from "react-router-dom";
// import "./Modules.css";

// const Modules = () => {
//   const openChatbot = () => {
//     window.open("http://localhost:8501/", "_blank", "width=800,height=600");
//   };

//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <Link to="/know-your-rights" className="read-more-link">Read More</Link>
//         </div>
//       </div>

//       {/* Digital Assistance Module */}
//       <div className="module digital-assistance">
//         <img src="chatbot.png" alt="Digital Icon" />
//         <div className="module-info">
//           <h2>Digital Assistance</h2>
//           <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//           <button className="read-more-link" onClick={openChatbot}>Discover Tools</button>
//         </div>
//       </div>

//       {/* Legal Templates Module */}
//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Legal Templates</h2>
//           <p>Get Legal Templates for Legal Agreements.</p>
//           <Link to="/templates" className="read-more-link">Get Templates</Link>
//         </div>
//       </div>

//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;








// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Modules.css';

// const Modules = () => {
//   const openChatbot = () => {
//     window.open("http://localhost:8501/", "_blank", "width=800,height=600");
//   };

//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <Link to="/know-your-rights" className="read-more-link">Read More</Link>
//         </div>
//       </div>

//       <div className="module digital-assistance">
//         <img src="chatbot.png" alt="Digital Icon" />
//         <div className="module-info">
//           <h2>Digital Assistance</h2>
//           <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//           <button className="read-more-link" onClick={openChatbot}>Discover Tools</button>
//         </div>
//       </div>

//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Legal Templates</h2>
//           <p>Get Legal Templates for Legal Agreements.</p>
//           <Link to="/templates" className="read-more-link">Get Templates</Link>  {/* ✅ Updated */}
//         </div>
//       </div>

//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;




import React from 'react';
import { Link } from 'react-router-dom';
import './Modules.css';

const Modules = () => {
  const openChatbot = () => {
    window.open("http://localhost:8501/", "_blank", "width=800,height=600");
  };

  return (
    <div className="modules">
      <div className="module">
        <img src="kyr.png" alt="Rights Icon" />
        <div className="module-info">
          <h2>Know Your Rights</h2>
          <p>Understand your legal rights as an individual. Knowledge is power!</p>
          <Link to="/know-your-rights" className="read-more-link">Read More</Link>
        </div>
      </div>

      {/* Digital Assistance Module */}
      <div className="module digital-assistance">
        <img src="chatbot.png" alt="Digital Icon" />
        <div className="module-info">
          <h2>Digital Assistance</h2>
          <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
          <button className="read-more-link" onClick={openChatbot}>Discover Tools</button>
        </div>
      </div>

      <div className="module">
        <img src="consulting.png" alt="Consultation Icon" />
        <div className="module-info">
          <h2>Legal Templates</h2>
          <p>Get Legal Templates for Legal Agreements.</p>
          <Link to="/templates" className="read-more-link">Get Templates</Link>
        </div>
      </div>

      <div className="module">
        <img src="letter.png" alt="History Icon" />
        <div className="module-info">
          <h2>Case Histories</h2>
          <p>Explore real-world legal case studies and outcomes.</p>
          <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
        </div>
      </div>
    </div>
  );
};

export default Modules;
