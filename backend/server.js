const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost/hospital";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

//import created routes here
const usersRouter = require("./routes/users");
const opdTicketClerkRouter = require("./routes/opdTicketClerk");
const dischargeRouter = require("./routes/discharge");
const transferRouter = require("./routes/transfer");
const visitRouter = require("./routes/visit");
const issueDrugRouter = require("./routes/issuedrug");
const addDrugRouter = require("./routes/drugadd");
const wardpatientRouter = require('./routes/wardPatient');
const wardpatientDietRouter = require('./routes/wardDiet');
const wardpatientPresRouter = require('./routes/wardpres');
const clinicpatientadd = require('./routes/cliniclist');
const clinicpatientPres = require('./routes/clinicPres');





//assign routes to use
app.use("/api/users", usersRouter);
app.use("/api/clinic", clinicpatientadd);
app.use("/api/clinicpres", clinicpatientPres);
app.use("/api/wardprescription", wardpatientPresRouter);
app.use("/api/opd_tc", opdTicketClerkRouter);
app.use("/api/discharge", dischargeRouter);
app.use("/api/transfer", transferRouter);
app.use("/api/wardvisit", visitRouter);
app.use("/api/issue", issueDrugRouter);
app.use("/api/drugadd", addDrugRouter);
app.use("/api/wardpatient",wardpatientRouter)
app.use("/api/warddiet",wardpatientDietRouter)


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
