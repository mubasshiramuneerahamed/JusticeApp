// import React from "react";
// import "./Templates.css"; // Import CSS for styling

// const Templates = () => {
//   // Agreement Titles
//   const agreements = [
//     "Agreement Between Contractor And Principal Employer",
//     "Agreement for Family Settlement",
//     "Agreement for Property",
//     "Agreement To Sale",
//     "Agreement for Temporary Employment",
//     "Agreement To Use Trademark",
//   ];

//   return (
//     <div className="templates-container">
//       <h2>Legal Agreement Templates</h2>
//       <div className="buttons-container">
//         {agreements.map((agreement, index) => (
//           <button key={index} className="template-button">
//             {agreement}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Templates;




// import React from 'react';

// const agreements = [
//   { name: "Agreement Between Contractor And Principal Employer", file: "agreement1.pdf" },
//   { name: "Agreement for Family Settlement", file: "agreement2.pdf" },
//   { name: "Agreement for Property", file: "agreement3.pdf" },
//   { name: "Agreement To Sale", file: "agreement4.pdf" },
//   { name: "Agreement for Temporary Employment", file: "agreement5.pdf" },
//   { name: "Agreement To Use Trademark", file: "agreement6.pdf" }
// ];

// const Temp = () => {
//   const openPDF = (file) => {
//     window.open(`/templatespdf/${file}`, '_blank');
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h2>Legal Agreement Templates</h2>
//       {agreements.map((agreement, index) => (
//         <button 
//           key={index} 
//           onClick={() => openPDF(agreement.file)} 
//           style={{
//             display: 'block',
//             margin: '10px auto',
//             padding: '10px 20px',
//             fontSize: '16px',
//             cursor: 'pointer'
//           }}
//         >
//           {agreement.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Temp;




// import React from "react";
// import "./Templates.css";

// const agreements = [
//   "Agreement Between Contractor And Principal Employer",
//   "Agreement for Family Settlement",
//   "Agreement for Property",
//   "Agreement To Sale",
//   "Agreement for Temporary Employment",
//   "Agreement To Use Trademark",
//   "Appointment Letter",
//   "Bank Guarantee",
//   "Business Agreement",
//   "Business Development Agreement",
//   "Anticipatory Bail Format for the Sessions Court",
// ];

// const Temp = () => {
//   const openPDF = (fileName) => {
//     // Construct the correct file path
//     const pdfFileName = `${fileName}.pdf`;
//     const pdfURL = `/templatespdf/${pdfFileName}`;
//     window.open(pdfURL, "_blank"); // Open in new tab
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Legal Agreement Templates</h2>
//       {agreements.map((agreement, index) => (
//         <button
//           key={index}
//           onClick={() => openPDF(agreement)}
//           style={{
//             display: "block",
//             margin: "10px auto",
//             padding: "10px 20px",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           {agreement}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Temp;





// import React from "react";
// import "./Templates.css"; // Ensure correct import

// const agreements = [
//   "Agreement Between Contractor And Principal Employer",
//   "Agreement for Family Settlement",
//   "Agreement for Property",
//   "Agreement To Sale",
//   "Agreement for Temporary Employment",
//   "Agreement To Use Trade Mark",
//   "Anticipatory Bail Format for the Sessions Court India",
//   "Appointment Letter",
//   "Bank Guarantee",
//   "Business Agreement",
//   "Business Development Agreement",
// ];

// const Temp = () => {
//   const openPDF = (fileName) => {
//     const pdfFileName = `${fileName}.pdf`;
//     const pdfURL = `/templatespdf/${pdfFileName}`;
//     window.open(pdfURL, "_blank"); // Open in new tab
//   };

//   return (
//     <div className="templates-container">
//       <h2>Legal Agreement Templates</h2>
//       <div className="buttons-container">
//         {agreements.map((agreement, index) => (
//           <button
//             key={index}
//             onClick={() => openPDF(agreement)}
//             className="template-button"
//           >
//             {agreement}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Temp;






// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import navigate
// import "./Templates.css";

// const agreements = [
//   "Agreement Between Contractor And Principal Employer",
//   "Agreement for Family Settlement",
//   "Agreement for Property",
//   "Agreement To Sale",
//   "Agreement for Temporary Employment",
//   "Agreement To Use Trade Mark",
//   "Anticipatory Bail Format for the Sessions Court India",
//   "Appointment Letter",
//   "Bank Guarantee",
//   "Business Agreement",
//   "Business Development Agreement",
// ];

// const Temp = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   const openPDF = (fileName) => {
//     const pdfFileName = `${fileName}.pdf`;
//     const pdfURL = `/templatespdf/${pdfFileName}`;
//     window.open(pdfURL, "_blank");
//   };

//   return (
//     <div className="templates-container">
//       {/* Home Button */}
//       <button 
//         className="home-button" 
//         onClick={() => navigate("/")} 
//         style={{ 
//           margin: "20px", 
//           padding: "10px 20px", 
//           backgroundColor: "#007b8f", 
//           color: "white", 
//           border: "none", 
//           borderRadius: "8px", 
//           cursor: "pointer" 
//         }}
//       >
//         Home
//       </button>

//       <h2>Legal Agreement Templates</h2>

//       <div className="buttons-container">
//         {agreements.map((agreement, index) => (
//           <button
//             key={index}
//             onClick={() => openPDF(agreement)}
//             className="template-button"
//           >
//             {agreement}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Temp;






// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Templates.css";

// const agreements = [
//   "Adoption of an orphan from an orphanage",
//   "Agreement Between Contractor And Principal Employer",
//   "Agreement between manufacturer and Dealer",
//   "Agreement between publisher and author",
//   "Agreement for constructing Building",
//   "Agreement for Family Settlement",
//   "Agreement for Property",
//   "Agreement To Sale",
//   "Agreement to sell patent rights",
//   "Agreement for Temporary Employment",
//   "Agreement To Use Trade Mark",
//   "Anticipatory Bail Format for the Sessions Court India",
//   "Appointment Letter",
//   "Bank Guarantee",
//   "Business Agreement",
//   "Business Development Agreement",
//   "Deed of gift for the purpose of establishing a Hospital",
//   "Gift Deed",
//   "Lease of furnished house",
//   "Loan agreement with Bank",
//   "Modification of existing lease deed",
//   "Petition for permission to sell minor",
//   "Power of Attorney",
//   "Tenancy agreement for Residential House",
//   // "Trust deed for charitable objects",


// ];

// const Temp = () => {
//   const navigate = useNavigate();

//   const openPDF = (fileName) => {
//     const pdfFileName = `${fileName}.pdf`;
//     const pdfURL = `/templatespdf/${pdfFileName}`;
//     window.open(pdfURL, "_blank");
//   };

//   const downloadPDF = (fileName) => {
//     const pdfFileName = `${fileName}.pdf`;
//     const link = document.createElement("a");
//     link.href = `/templatespdf/${pdfFileName}`;
//     link.download = pdfFileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="templates-container">
//       {/* Home Button */}
//       <button
//         className="home-button"
//         onClick={() => navigate("/")}
//         style={{
//           margin: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#007b8f",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//         }}
//       >
//         Home
//       </button>

//       <h2>Legal Agreement Templates</h2>

//       <div className="buttons-container">
//         {agreements.map((agreement, index) => (
//           <div key={index} className="agreement-row">
//             <button
//               onClick={() => openPDF(agreement)}
//               className="template-button"
//             >
//               {agreement}
//             </button>
//             <button
//               onClick={() => downloadPDF(agreement)}
//               className="download-button"
//             >
//               Download
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Temp;









import React from "react";
import { useNavigate } from "react-router-dom";
import "./Templates.css";

const agreements = [
  "Adoption of an orphan from an orphanage",
  "Agreement Between Contractor And Principal Employer",
  "Agreement between manufacturer and Dealer",
  "Agreement between publisher and author",
  "Agreement for constructing Building",
  "Agreement for Family Settlement",
  "Agreement for Property",
  "Agreement To Sale",
  "Agreement to sell patent rights",
  "Agreement for Temporary Employment",
  "Agreement To Use Trade Mark",
  "Anticipatory Bail Format for the Sessions Court India",
  "Appointment Letter",
  "Bank Guarantee",
  "Business Agreement",
  "Business Development Agreement",
  "Deed of gift for the purpose of establishing a Hospital",
  "Gift Deed",
  "Lease of furnished house",
  "Loan agreement with Bank",
  "Modification of existing lease deed",
  "Petition for permission to sell minor",
  "Power of Attorney",
  "Tenancy agreement for Residential House",
  // "Trust deed for charitable objects",
];

const Temp = () => {
  const navigate = useNavigate();

  const openPDF = (fileName) => {
    const pdfFileName = `${fileName}.pdf`;
    const pdfURL = `/templatespdf/${pdfFileName}`;
    window.open(pdfURL, "_blank");
  };

  const downloadPDF = (fileName) => {
    const pdfFileName = `${fileName}.pdf`;
    const link = document.createElement("a");
    link.href = `/templatespdf/${pdfFileName}`;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Split the agreements into two columns
  const middleIndex = Math.ceil(agreements.length / 2);
  const firstColumn = agreements.slice(0, middleIndex);
  const secondColumn = agreements.slice(middleIndex);

  return (
    <div className="templates-container">
      <button
        className="home-button"
        onClick={() => navigate("/")}
        style={{
          margin: "20px",
          padding: "10px 20px",
          backgroundColor: "#007b8f",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Home
      </button>

      <h2>Legal Agreement Templates</h2>

      <div className="columns-container">
        {/* Column 1 */}
        <div className="column">
          {firstColumn.map((agreement, index) => (
            <div key={index} className="agreement-row">
              <button
                onClick={() => openPDF(agreement)}
                className="template-button"
              >
                {agreement}
              </button>
              <button
                onClick={() => downloadPDF(agreement)}
                className="download-button"
              >
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="column">
          {secondColumn.map((agreement, index) => (
            <div key={index} className="agreement-row">
              <button
                onClick={() => openPDF(agreement)}
                className="template-button"
              >
                {agreement}
              </button>
              <button
                onClick={() => downloadPDF(agreement)}
                className="download-button"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temp;

