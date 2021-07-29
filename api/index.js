const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('../api/routes/auth');
const userRoute = require('../api/routes/users');
const postRoute = require('../api/routes/post');
const catRoute = require('../api/routes/categories');
const multer = require('multer');
const app = express();
const path = require('path');

dotenv.config();
  
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//connect to database
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(console.log("connected to db"))
    .catch((err) => console.log(err));

//using multer dependency to upload images
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'images');
    },
    filename: (req, file, cb)=>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post('/api/upload', upload.single('file'), (req, res)=>{
    res.status(200).json('file has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', catRoute);



//listen to port number
app.listen(5000, ()=>{
    console.log("backend is running");
});