const express = require('express'),
      dotenv = require("dotenv"),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      app = express(),
      passportSetup = require("./passport"),
      cors = require("cors"),
      authRoute = require("./routes/auth"),
      postRoute = require("./routes/posts"),
      mongoose = require("mongoose"),
      cookieSession = require("cookie-session"),
      multer = require("multer"),
      path = require("path");
      const fs = require('fs');
const { createLogger, format, transports } = require('winston');

const port = process.env.PORT || 8080;

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('webblog/build'))
// }

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// const filename = path.join(logDir, 'results.log');

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    // new transports.File({ filename })
  ]
});


dotenv.config();
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")))
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"images")
  },filename:(req,file,cb) => {
    cb(null,req.body.name);
  },
})

const upload = multer({storage:storage})
app.post("/upload", upload.single("file"),(req,res) => {
  res.status(200).json("File has been uploaded");
})

app.use(cookieSession(
  {
    name: "session",
    keys: ["teerayut"],
    maxAge: 20*60*60*100
  }
))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin:"https://dc02.coe.psu.ac.th",
  methods:"GET,POST,PUT,DELETE",
  credentials:true,
}));

// app.use(() => (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json());
app.use("/auth", authRoute);
app.use("/posts", postRoute);

app.listen(port, () => {
  console.log(`Backend is running port ${port}`)
});