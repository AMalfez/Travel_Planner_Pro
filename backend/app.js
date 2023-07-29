require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const authRoute = require('./routes/authRoute')
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();
const port = 3000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected!");
  });


// const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
// app.use(cors({
//   origin:`${process.env.CLIENT_URL}`,
//   credentials:true
// }));
app.use(cors());

app.use('/auth',authRoute);

app.get('/',(req,res)=>{
  res.send('Hi i am listening you');
})

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
