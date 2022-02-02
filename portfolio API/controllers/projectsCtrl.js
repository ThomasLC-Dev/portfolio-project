import Project from "../models/project.js";

export const getAllProjects = async (req, res) => {
    const projects = await Project.find();

    res.status(200).json(projects);
}

export const getProject = async (req, res) => {
    const project = await Project.findById(req.params.projectId);

    res.status(200).json(project);
}

export const createProject = async (req, res) => {
    const project = new Project(req.body);

    if(req.files.thumbnail && req.files.images){
        project.thumbnail = req.files.thumbnail[0].location;
        project.images = req.files.images.map(image => image.location);
    }

    project.save();

    res.status(201).json({
        result: "Project created !",
    });
}

export const editProject = async (req, res) => {
    if(req.files.thumbnail && req.files.images){
        const thumbnail = req.files.thumbnail[0].location;
        const images = req.files.images.map(image => image.location);
        req.body.thumbnail = thumbnail;
        req.body.images = images;
    }
    await Project.findOneAndUpdate(req.params.projectId, req.body);

    res.status(201).json({
        result: "Project updated !",
    });
}

export const deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.projectId);

    res.status(201).json({
        result: "Project deleted !",
    });
}