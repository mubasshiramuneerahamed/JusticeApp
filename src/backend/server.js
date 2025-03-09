// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const authRoutes = require("./routes/authRoutes");

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const caseHistoriesRoutes = require("./routes/caseHistoriesRoutes"); // Import new route
// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api', authRoutes);

// app.listen(5000, () => console.log('🚀 Server running on port 5000'));

// app.use('/api/case-histories', caseHistoriesRoutes);
// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const caseHistoriesRoutes = require("./routes/caseHistoriesRoutes"); // Import new route

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Fix the endpoint structure
app.use('/api/case-histories', caseHistoriesRoutes); // This should be correctly placed

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// // MongoDB connection
// const mongoURI = "mongodb://localhost:27017/pdfDatabase";
// const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// let gfs;
// conn.once("open", () => {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection("pdfs");
// });

// // Storage setup for GridFS
// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//         return {
//             filename: file.originalname,
//             bucketName: "pdfs",
//         };
//     },
// });

// const upload = multer({ storage });

// // Upload PDF
// app.post("/upload", upload.single("file"), (req, res) => {
//     res.json({ file: req.file });
// });

// // Fetch all PDFs
// app.get("/pdfs", async (req, res) => {
//     const files = await gfs.files.find().toArray();
//     res.json(files);
// });

// // Retrieve a PDF by filename
// app.get("/pdf/:filename", (req, res) => {
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//         if (!file || file.length === 0) {
//             return res.status(404).json({ error: "No file found" });
//         }
//         const readstream = gfs.createReadStream(file.filename);
//         readstream.pipe(res);
//     });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

