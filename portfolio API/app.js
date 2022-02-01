import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

import workExperiencesRoutes from "./routes/workExperiencesRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";

//App Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8002;

//AWS S3 Config
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;

const s3 = new aws.S3({
    region: region,
    accessKeyId: accessKey,
    secretAccessKey: secretKey
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        metadata: function(req, file, cb){
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb){
            cb(null, Date.now() + " - " + file.originalname);
        }
    })
});

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//DB Config
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Routes
app.use('/work-experiences', workExperiencesRoutes);
app.use('/projects', upload.fields([{name: "thumbnail", maxCount: 1}, {name: "images"}]), projectsRoutes);
app.use("/skills", upload.single('image'), skillsRoutes);

//Listener
app.listen(port, () => console.log('Start on localhost:'+port));