import WorkExperience from "../models/workExperience.js";

export const getAllWorkExperiences = async (req, res) => {
    const workExperiences = await WorkExperience.find();

    res.status(200).json(workExperiences);
}

export const getWorkExperience = async (req, res) => {
    const workExperience = await WorkExperience.findById(req.params.workExperienceId);

    res.status(200).json(workExperience);
}

export const createWorkExperience = async (req, res) => {
    const workExperience = new WorkExperience(req.body);

    workExperience.save();

    res.status(201).json({
        result: "Work Experience created !",
    });
}

export const editWorkExperience = async (req, res) => {
    await WorkExperience.findOneAndUpdate(req.params.workExperienceId, req.body);

    res.status(201).json({
        result: "Work Experience updated !",
    });
}

export const deleteWorkExperience = async (req, res) => {
    await WorkExperience.findByIdAndDelete(req.params.workExperienceId);

    res.status(201).json({
        result: "Work Experience deleted !",
    });
}