// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Document, Page } from "react-pdf";

// const PDFViewer = () => {
//     const [pdfs, setPdfs] = useState([]);
//     const [selectedPdf, setSelectedPdf] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:5000/pdfs").then((response) => {
//             setPdfs(response.data);
//         });
//     }, []);

//     const handleViewPDF = (filename) => {
//         setSelectedPdf(`http://localhost:5000/pdf/${filename}`);
//     };

//     return (
//         <div>
//             <h2>Available PDFs</h2>
//             <ul>
//                 {pdfs.map((pdf) => (
//                     <li key={pdf._id}>
//                         <button onClick={() => handleViewPDF(pdf.filename)}>
//                             {pdf.filename}
//                         </button>
//                     </li>
//                 ))}
//             </ul>

//             {selectedPdf && (
//                 <div>
//                     <h3>Viewing: {selectedPdf.split("/").pop()}</h3>
//                     <Document file={selectedPdf}>
//                         <Page pageNumber={1} />
//                     </Document>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PDFViewer;
