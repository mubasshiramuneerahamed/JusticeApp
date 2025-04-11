// import React, { useState } from "react";
// import "./CaseHistories.css"; // Ensure you create a corresponding CSS file

// const pdfFileMapping = {
   
 
//     "Land Dispute Resolution": "pdfs/-0___jonew__judis__123.pdf",
//     "Criminal Sentencing Guidelines": "pdfs/-0___jonew__judis__126.pdf",
//     "Family Law Mediation": "pdfs/-0___jonew__judis__10166.pdf",
//     "Tax Evasion Prosecution": "pdfs/-0___jonew__judis__10187.pdf",
//     "Corporate Fraud Litigation": "pdfs/-0___jonew__judis__10193.pdf",
//     "Environmental Impact Assessment": "pdfs/-0___jonew__judis__10290.pdf",
//     "Child Custody Disputes": "pdfs/-0___jonew__judis__10304.pdf",
//     "Workplace Discrimination Cases": "pdfs/-0___jonew__judis__10322.pdf",
//     "Intellectual Property Rights": "pdfs/-0___jonew__judis__10347.pdf",
//     "Personal Injury Compensation": "pdfs/-0___jonew__judis__10356.pdf",
//     "Contract Breach Claims": "pdfs/-0___jonew__judis__10391.pdf",
//     "Real Estate Title Disputes": "pdfs/-0___jonew__judis__10426.pdf",
//     "Employment Termination Laws": "pdfs/-0___jonew__judis__10439.pdf",
//     "Civil Rights Violations": "pdfs/-0___jonew__judis__10442.pdf",
//     "Medical Malpractice Cases": "pdfs/-0___jonew__judis__10502.pdf",
//     "Immigration Visa Denials": "pdfs/-0___jonew__judis__10519.pdf",
//     "Insider Trading Allegations": "pdfs/-0___jonew__judis__10520.pdf",
//     "Paternity Test Results": "pdfs/-0___jonew__judis__10548.pdf",
//     "Divorce Settlement Agreements": "pdfs/-0___jonew__judis__10166.pdf",
// };

// const CaseHistories = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   return (
//     <div className="case-histories-container">
//       <a href="/" className="home-button">Home</a>
//       <h1>Legal Case Histories</h1>
//       <input
//         type="text"
//         placeholder="Search for a case..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button className="search-button">Search</button>
//       <div className="pdf-container">
//         {Object.entries(pdfFileMapping)
//           .filter(([title]) => title.toLowerCase().includes(searchTerm))
//           .map(([title, link]) => (
//             <div key={title} className="pdf-card">
//               <a href={link} target="_blank" rel="noopener noreferrer">
//                 {title}
//               </a>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CaseHistories;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./CaseHistories.css"; 

// const CaseHistories = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [caseHistories, setCaseHistories] = useState([]);

//   // Fetch case histories from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/case-histories")
//       .then((response) => {
//         setCaseHistories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching case histories:", error);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   return (
//     <div className="case-histories-container">
//       <a href="/" className="home-button">Home</a>
//       <h1>Legal Case Histories</h1>
//       <input
//         type="text"
//         placeholder="Search for a case..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button className="search-button">Search</button>
//       <div className="pdf-container">
//         {caseHistories
//           .filter((caseItem) => caseItem.title.toLowerCase().includes(searchTerm))
//           .map((caseItem) => (
//             <div key={caseItem.id} className="pdf-card">
//               <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
//                 {caseItem.title}
//               </a>
//               <p>{caseItem.description}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CaseHistories;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CaseHistories.css"; 
import { useNavigate } from "react-router-dom";

const pdfFileMapping = {
  // "Land Dispute Resolution": "pdfs/-0___jonew__judis__123.pdf",
  // "Criminal Sentencing Guidelines": "pdfs/-0___jonew__judis__126.pdf",
  "Validity of National Awards": "pdfs/-0___jonew__judis__10166.pdf",
  "Land Reform Ordinance Validity Challenge": "pdfs/-0___jonew__judis__10187.pdf",
  "Electoral Malpractice and Religious Appeal": "pdfs/-0___jonew__judis__10193.pdf",
  "Bahadurgarh Plot Allotment Case": "pdfs/-0___jonew__judis__10220.pdf",
  "Compensation Rights Dispute": "pdfs/-0___jonew__judis__10290.pdf",
  "Caste Certificate Proceedings": "pdfs/-0___jonew__judis__10304.pdf",
  "Disagreement on Appeals": "pdfs/-0___jonew__judis__10322.pdf",
  "Murder Conviction": "pdfs/-0___jonew__judis__10347.pdf",
  "Dismissal of Pension Appeal ": "pdfs/-0___jonew__judis__10356.pdf",
  "Educational Land Dispute": "pdfs/-0___jonew__judis__10391.pdf",
  "Dowry Land Ownership": "pdfs/-0___jonew__judis__10426.pdf",
  "Stock Exchange Membership Criteria Dispute": "pdfs/-0___jonew__judis__10439.pdf",
  "Appeal on Tribunal’s Remarks": "pdfs/-0___jonew__judis__10442.pdf",
  "Validity of Nomination under Company Law": "pdfs/-0___jonew__judis__10502.pdf",
  "Sentencing for Wilful Disobedience": "pdfs/-0___jonew__judis__10519.pdf",
  "Employment Discrimination": "pdfs/-0___jonew__judis__10520.pdf",
  "Murder of Medical Practitioner": "pdfs/-0___jonew__judis__10548.pdf",
  "Custodial Rights": "pdfs/-0___jonew__judis__10557.pdf",
  "Appeal Against Bail Rejection": "pdfs/-0___jonew__judis__10562.pdf",
  "Bank Fraud and CBI Sanction Case": "pdfs/-0___jonew__judis__10613.pdf",
  "Land Acquisition Compensation Dispute": "pdfs/-0___jonew__judis__10629.pdf",
  "Circumstantial Evidence and Confession Dispute": "pdfs/-0___jonew__judis__10637.pdf",
  "Challenge to Collector’s Disqualification Order": "pdfs/-0___jonew__judis__10649.pdf",
  "Police Misconduct Allegations": "pdfs/-0___jonew__judis__10663.pdf",
  "Family Property Dispute": "pdfs/-0___jonew__judis__10668.pdf",
  "Murder over Land Dispute": "pdfs/-0___jonew__judis__10679.pdf", 
  "Land Acquisition Disputes": "pdfs/-0___jonew__judis__10693.pdf",
  "Promotion Eligibility Dispute": "pdfs/-0___jonew__judis__10752.pdf",
  "Delayed Payment of Selection Grade": "pdfs/-0___jonew__judis__10762.pdf",
  "Denial of Wages": "pdfs/-0___jonew__judis__10773.pdf",
  "Doordarshan Contempt Proceedings": "pdfs/-0___jonew__judis__10796.pdf",
  "Judicial Divergence on Detention Representation": "pdfs/-0___jonew__judis__10804.pdf",
  "Housing for Judiciary": "pdfs/-0___jonew__judis__10805.pdf",
  "Human Rights Violation": "pdfs/-0___jonew__judis__10814.pdf",
  "Wealth Tax Appeals": "pdfs/-0___jonew__judis__10818.pdf",
  "Property Lease Cases": "pdfs/-0___jonew__judis__10823.pdf",
  "Tenancy and Succession Issues": "pdfs/-0___jonew__judis__10844.pdf",
  "Re-grant and Tenancy Rights": "pdfs/-0___jonew__judis__10857.pdf",
  "Service Continuity and Entitlements": "pdfs/-0___jonew__judis__10877.pdf",
  "Cheque Forgery Dispute": "pdfs/-0___jonew__judis__10886.pdf",
  "Industrial Disputes": "pdfs/-0___jonew__judis__10892.pdf",
  "Enforcement of Auction Terms": "pdfs/-0___jonew__judis__10897.pdf",
  "Denied Promotion": "pdfs/-0___jonew__judis__10910.pdf",
  "Strike Disruption and Consumer Law": "pdfs/-0___jonew__judis__10924.pdf",
  "Commercial Plot Auction Dispute": "pdfs/-0___jonew__judis__10933.pdf",
  "Eviction Dispute Over Acquired Property": "pdfs/-0___jonew__judis__10937.pdf",
  "Dispute Over Unregistered Sale": "pdfs/-0___jonew__judis__10941.pdf",
  "Rejection of Compensation Redetermination": "pdfs/-0___jonew__judis__10948.pdf",
  "Duty Claim Dismissed": "pdfs/-0___jonew__judis__10955.pdf",
  "State Elections Standoff": "pdfs/-0___jonew__judis__10960.pdf",
};

const CaseHistories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [caseHistories, setCaseHistories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCaseHistories(
      Object.entries(pdfFileMapping).map(([title, pdfUrl]) => ({ title, pdfUrl }))
    );
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="case-histories-container">
      <button className="home-button" onClick={() => navigate("/")}>
        Home
        
      </button>
      <h1>Legal Case Histories</h1>
      <input
        type="text"
        placeholder="Search for a case..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="search-button">Search</button>
      <div className="pdf-container">
        {caseHistories
          .filter((caseItem) => caseItem.title.toLowerCase().includes(searchTerm))
          .map((caseItem) => (
            <div key={caseItem.title} className="pdf-card">
              <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
                {caseItem.title}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CaseHistories;











// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PDFViewer from "./PDFViewer"; // Import the new component
// import "./CaseHistories.css";

// const pdfFileMapping = {
//   "Family Law Mediation": "pdfs/-0___jonew__judis__10166.pdf",
//   "Tax Evasion Prosecution": "pdfs/-0___jonew__judis__10187.pdf",
//   "Corporate Fraud Litigation": "pdfs/-0___jonew__judis__10193.pdf",
// };

// const CaseHistories = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [caseHistories, setCaseHistories] = useState([]);
//   const [selectedPdf, setSelectedPdf] = useState(null); // State to track selected PDF
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCaseHistories(Object.entries(pdfFileMapping).map(([title, pdfUrl]) => ({ title, pdfUrl })));
//   }, []);

//   return (
//     <div className="case-histories-container">
//       <button className="home-button" onClick={() => navigate("/")}>
//         Home
//       </button>
//       <h1>Legal Case Histories</h1>
//       <input
//         type="text"
//         placeholder="Search for a case..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
//       />
//       <button className="search-button">Search</button>
//       <div className="pdf-container">
//         {caseHistories
//           .filter((caseItem) => caseItem.title.toLowerCase().includes(searchTerm))
//           .map((caseItem) => (
//             <div key={caseItem.title} className="pdf-card" onClick={() => setSelectedPdf(caseItem.pdfUrl)}>
//               {caseItem.title}
//             </div>
//           ))}
//       </div>

//       {selectedPdf && <PDFViewer pdfUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />}
//     </div>
//   );
// };

// export default CaseHistories;
