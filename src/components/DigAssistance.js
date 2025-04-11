// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './DigitalAssistance.css';

// const DigitalAssistance = () => {
//   const [chatInput, setChatInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Handle User Input in Chat
//   const handleInputChange = (e) => {
//     setChatInput(e.target.value);
//   };

//   // Handle Chat Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!chatInput) return;

//     setLoading(true);

//     try {
//       // Example of API call to your backend chatbot or external AI service
//       const response = await axios.post('http://localhost:5000/api/chatbot', { query: chatInput });
//       const botResponse = response.data.message;

//       // Update chat history with user and bot messages
//       setChatHistory([
//         ...chatHistory,
//         { role: 'user', message: chatInput },
//         { role: 'bot', message: botResponse }
//       ]);
//       setChatInput('');
//     } catch (err) {
//       console.error('Error:', err);
//       setLoading(false);
//     }
//   };

//   // Key Features for Digital Assistance
//   const keyFeatures = [
//     "Legal Templates: Access various legal templates for drafting documents.",
//     "Case Histories: Browse through a repository of historical legal cases.",
//     "Chatbot Assistance: Our chatbot answers legal queries based on Indian law.",
//     "Know Your Rights: Learn about legal rights available under Indian law.",
//     "FAQs: Get answers to frequently asked legal questions."
//   ];

//   return (
//     <div className="digital-assistance-container">
//       <div className="header">
//         <h1>Digital Assistance ⚖️</h1>
//         <button onClick={() => navigate('/home')}>Back to Home</button>
//       </div>
      
//       <div className="content">
//         <section className="intro">
//           <h2>Welcome to Digital Assistance</h2>
//           <p>
//             This section provides you with resources and tools to help navigate legal issues. 
//             Whether you need templates, case histories, or help understanding your rights, 
//             we're here to assist you.
//           </p>
//         </section>

//         <section className="features">
//           <h2>Key Features</h2>
//           <ul>
//             {keyFeatures.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//         </section>

//         <section className="chatbot">
//           <h2>Chat with our Legal Awareness Chatbot</h2>
//           <div className="chat-history">
//             {chatHistory.map((msg, index) => (
//               <div key={index} className={`chat-message ${msg.role}`}>
//                 <p>{msg.message}</p>
//               </div>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Ask a legal question..."
//               value={chatInput}
//               onChange={handleInputChange}
//               required
//             />
//             <button type="submit" disabled={loading}>
//               {loading ? 'Loading...' : 'Send'}
//             </button>
//           </form>
//         </section>

//         <section className="contact-support">
//           <h2>Contact Support</h2>
//           <p>If you need further assistance, contact us:</p>
//           <p>Email: <a href="mailto:support@legalawareness.com">support@legalawareness.com</a></p>
//           <p>Phone: +91 123 456 7890</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default DigitalAssistance;

