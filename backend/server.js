// Import required dependencies
const express = require("express"); // Web framework for Node.js
const mongoose = require("mongoose"); // MongoDB ORM for database operations
const cors = require("cors"); // Middleware for cross-origin requests
require("dotenv").config(); // Load environment variables from .env file

// Import blog routes from separate file for better organization
const blogRoutes = require("./routes/blogRoutes");

// Create the Express application instance
const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Serve static files from the 'uploads' directory
// This makes uploaded files publicly accessible via HTTP
app.use("/uploads", express.static("uploads"));

// Mount blog routes at the /api/blogs path
// All routes defined in blogRoutes will be prefixed with this path
app.use("/api/blogs", blogRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Start server only after successful MongoDB connection
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));
