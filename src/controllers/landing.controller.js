import cloudinary from "../lib/cloudinary.js";
import Project from "../models/project.model.js";
import Tag from "../models/tag.model.js";


export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
            .sort({ sequence: -1 })
            .populate('tags')
            .populate('images')
            .populate('thumbnail');

        res.send({ projects });
    } catch (error) {
        console.log("Error in retrieving project: ", error);
        res.status(500).json({ message: error.message });
    }
};


export const getMySkills = async (req, res) => {
    try {

        const mySkills = await Tag.find({mySkill: true}).sort({mySkill: -1});

        res.send({
            mySkills,
        });

    } catch (error) {
        console.log("Error in retrieving skill tags: ", error);
        res.status(500).json({message: error.message});
    }
}

export const getProject = async (req, res) => {
    try {

        const project = await Project.findById(req.params.id)
            .populate('tags')
            .populate('images')
            .populate('thumbnail');

        res.send({ project });


    } catch (error)
    {
        console.log("Error in retrieving project: ", error);
        res.status(500).json({message: error.message});
    }
};

export const getMyCerts = async (req, res) => {
    try {

        // const certs = 

    } catch(error) 
    {

    }
}