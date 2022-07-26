const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
//internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const serviceRouter = require("./router/serviceRouter");
const reviewRouter = require("./router/reviewRouter");
const bookRouter = require("./router/bookRouter");
const adminRouter = require("./router/adminRouter");

const app = express();
const port = 5000
dotenv.config();


//database connection
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tru0v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log("error is", err));

//request parser
app.use(cors());
app.use(express.json());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//routing setup
app.use("/service", serviceRouter);
app.use("/review", reviewRouter);
app.use("/book", bookRouter);
app.use("/admin", adminRouter);

//404 not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
