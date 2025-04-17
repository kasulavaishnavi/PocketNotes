const express = require("express");
const cors = require("cors");

const app = express();

// Port
const port = process.env.PORT || 4000;

// Database Connection
require("./database/connection");

// Require Routes
const noteRoutes = require("./routes/notesRoutes");

app.get("/", (req, res) => {
  res.send("hello");
});

// Middleware
app.use(express.json());

// Configure CORS options
const corsOptions = {
  origin: "https://pocketnotes-kbmm.onrender.com", // Allow requests from your frontend origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify allowed HTTP methods
  credentials: true, // If you need to handle cookies or authorization headers
  allowedHeaders: "Content-Type,Authorization", // Specify allowed request headers
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Routes
app.use("/api", noteRoutes);

app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});