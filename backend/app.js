// ENV
require("dotenv").config();

// Requirements
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Importing Modules
const publicRoutes = require("./routes/public");
const userRoutes = require("./routes/user");
const restaurantRoutes = require("./routes/restaurant");
const adminRoutes = require("./routes/admin");

const allowedOrigins = [
  "http://localhost:5173",              // local dev
  process.env.FRONTEND_URL              // production frontend (Vercel)
];

// Express App
const app = express();

// Middleware - Parse JSON
app.use(express.json());
app.use(cookieParser());

// Middleware - CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman / server-to-server
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Middleware - requesting path and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/public', publicRoutes);
app.use("/api/users", userRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/admins", adminRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/", (req, res) => {
  res.send('The backend is running!')
});
