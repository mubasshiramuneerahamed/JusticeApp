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
  "Family Law Mediation": "pdfs/-0___jonew__judis__10166.pdf",
  "Tax Evasion Prosecution": "pdfs/-0___jonew__judis__10187.pdf",
  "Corporate Fraud Litigation": "pdfs/-0___jonew__judis__10193.pdf",
  "Environmental Impact Assessment": "pdfs/-0___jonew__judis__10220.pdf",
  "Child Custody Disputes": "pdfs/-0___jonew__judis__10290.pdf",
  "Workplace Discrimination Cases": "pdfs/-0___jonew__judis__10304.pdf",
  "Intellectual Property Rights": "pdfs/-0___jonew__judis__10322.pdf",
  "Personal Injury Compensation": "pdfs/-0___jonew__judis__10347.pdf",
  "Contract Breach Claims": "pdfs/-0___jonew__judis__10356.pdf",
  "Real Estate Title Disputes": "pdfs/-0___jonew__judis__10391.pdf",
  "Employment Termination Laws": "pdfs/-0___jonew__judis__10426.pdf",
  "Civil Rights Violations": "pdfs/-0___jonew__judis__10439.pdf",
  "Medical Malpractice Cases": "pdfs/-0___jonew__judis__10442.pdf",
  "Immigration Visa Denials": "pdfs/-0___jonew__judis__10502.pdf",
  "Insider Trading Allegations": "pdfs/-0___jonew__judis__10519.pdf",
  "Paternity Test Results": "pdfs/-0___jonew__judis__10520.pdf",
  "Divorce Settlement Agreements": "pdfs/-0___jonew__judis__10548.pdf",
  "Product Liability Lawsuits": "pdfs/-0___jonew__judis__10557.pdf",
  "Inheritance Dispute Resolutions": "pdfs/-0___jonew__judis__10562.pdf",
  "Antitrust Violations": "pdfs/-0___jonew__judis__10613.pdf",
  "Defamation Lawsuits": "pdfs/-0___jonew__judis__10629.pdf",
  "Copyright Infringement Actions": "pdfs/-0___jonew__judis__10637.pdf", 
  "Zoning Regulation Challenges": "pdfs/-0___jonew__judis__10649.pdf",
  "Police Misconduct Allegations": "pdfs/-0___jonew__judis__10663.pdf",
  "Bankruptcy Filing Process": "pdfs/-0___jonew__judis__10668.pdf",
  "Adoption Approval Hearings": "pdfs/-0___jonew__judis__10679.pdf", 
  "Insurance Claim Disputes": "pdfs/-0___jonew__judis__10693.pdf",
  "Custodial Parent Relocation": "pdfs/-0___jonew__judis__10752.pdf",
  "Workers' Compensation Claims": "pdfs/-0___jonew__judis__10762.pdf",
  "Alimony Modification Petitions": "pdfs/-0___jonew__judis__10773.pdf",
  "Housing Code Violations": "pdfs/-0___jonew__judis__10796.pdf",
  "Domestic Violence Restraining": "pdfs/-0___jonew__judis__10804.pdf",
  "Eminent Domain Proceedings": "pdfs/-0___jonew__judis__10805.pdf",
  "Child Support Orders": "pdfs/-0___jonew__judis__10814.pdf",
  "Whistleblower Protections": "pdfs/-0___jonew__judis__10818.pdf",
  "Tax Fraud Investigations": "pdfs/-0___jonew__judis__10823.pdf",
  "Employment Discrimination": "pdfs/-0___jonew__judis__10844.pdf",
  "Marriage Annulment Cases": "pdfs/-0___jonew__judis__10857.pdf",
  "Class Action Lawsuits": "pdfs/-0___jonew__judis__10877.pdf",
  "Juvenile Delinquency Hearings": "pdfs/-0___jonew__judis__10886.pdf",
  "Securities Fraud Trials": "pdfs/-0___jonew__judis__10892.pdf",
  "Privacy Invasion Suits": "pdfs/-0___jonew__judis__10897.pdf",
  "Property Boundary Disputes": "pdfs/-0___jonew__judis__10910.pdf",
  "Medical Ethics Issues": "pdfs/-0___jonew__judis__10924.pdf",
  "Immigration Asylum Claims": "pdfs/-0___jonew__judis__10933.pdf",
  "Non-Compete Agreement": "pdfs/-0___jonew__judis__10937.pdf",
  "Public Nuisance Lawsuits": "pdfs/-0___jonew__judis__10941.pdf",
  "Adoption Finalizations": "pdfs/-0___jonew__judis__10948.pdf",
  "Landlord-Tenant Disputes": "pdfs/-0___jonew__judis__10955.pdf",
  "Nursing Home Neglect": "pdfs/-0___jonew__judis__10960.pdf",
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
