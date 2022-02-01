import Skill from "../models/skill.js";

export const getAllSkills = async (req, res) => {
    const skills = await Skill.find();

    res.status(200).json(skills);
}

export const getSkill = async (req, res) => {
    const skill = await Skill.findById(req.params.skillId);

    res.status(200).json(skill);
}

export const createSkill = async (req, res) => {
    const skill = new Skill(req.body);

    if(req.file){
        skill.image = req.file.key;
    }

    skill.save();

    res.status(201).json({
        result: "Skill created !",
    });
}

export const editSkill = async (req, res) => {
    if(req.file){
        const image = req.file.key;
        req.body.image = image;
    }

    await Skill.findOneAndUpdate(req.params.skillId, req.body);

    res.status(201).json({
        result: "Skill updated !",
    });
}

export const deleteSkill = async (req, res) => {
    await Skill.findByIdAndDelete(req.params.skillId);

    res.status(201).json({
        result: "Skill deleted !",
    });
}