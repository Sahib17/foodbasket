require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");

// PUBLIC Routes
const publicRoutes = require("./routes/public");

// PROTECTED Routes
// const userRoutes = require("./routes/user");
// const restaurantRoutes = require("./routes/restaurant");
// const adminRoutes = require("./routes/admin");


const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/', publicRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/restaurants", restaurantRoutes);
// app.use("/api/admin", adminRoutes);

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

app.get("/", (req, res) => {
  console.log('hi')
});
