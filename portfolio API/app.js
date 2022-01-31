import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";

import workExperiencesRoutes from "./routes/workExperiencesRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";

//App Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8002;

//Multer Config
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " - " + file.originalname);
    }
});

const upload = multer({storage: fileStorage});

//Middlewares
app.use(express.static('uploads'));
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