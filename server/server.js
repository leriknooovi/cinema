const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());

app.use(cors());

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");
const theatresRoute = require("./routes/theatresRoute")
const bookingsRoute = require("./routes/bookingsRoute")

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theatres", theatresRoute);
app.use("/api/bookings", bookingsRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Node JS Server is running on port ${port}`));