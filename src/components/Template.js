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





import React from "react";
import "./Templates.css"; // Ensure correct import

const agreements = [
  "Agreement Between Contractor And Principal Employer",
  "Agreement for Family Settlement",
  "Agreement for Property",
  "Agreement To Sale",
  "Agreement for Temporary Employment",
  "Agreement To Use Trade Mark",
  "Anticipatory Bail Format for the Sessions Court India",
  "Appointment Letter",
  "Bank Guarantee",
  "Business Agreement",
  "Business Development Agreement",
];

const Temp = () => {
  const openPDF = (fileName) => {
    const pdfFileName = `${fileName}.pdf`;
    const pdfURL = `/templatespdf/${pdfFileName}`;
    window.open(pdfURL, "_blank"); // Open in new tab
  };

  return (
    <div className="templates-container">
      <h2>Legal Agreement Templates</h2>
      <div className="buttons-container">
        {agreements.map((agreement, index) => (
          <button
            key={index}
            onClick={() => openPDF(agreement)}
            className="template-button"
          >
            {agreement}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Temp;
