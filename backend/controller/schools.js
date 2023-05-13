import School from "../model/Schools.js";
import jwt from "jsonwebtoken";


export const createSchool = async(req,res) =>{
    try {
        const school =  await School.create(req.body)
        console.log(req.body)
        res.status(200).send({
            success:true,
            data:school
        })
    } catch (error) {
        res.status(400).send({  
            success:false,
            data:error.message
        })
    }
    }
    
    export const getAllSchool = async (req,res)=>{
        try {
          const allSchool = await School.find({})
        console.log(getAllSchool)
            res.status(200).send({
                success:true,
                data:allSchool
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    export const getSchoolById = async (req,res)=>{
        const id = req.params
        try {
            const schoolById = await School.findById({_id:id})
            res.status(200).send({
                success:true,
                data:schoolById
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    
    export const deleteSchool = async(req, res)=>{
        const id = req.params.id
        try {
            const deleteSchool = await School.deleteOne({_id:id})
            res.status(200).send({
                success:true,
                data:deleteSchool
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    export const updateSchool = async (req, res)=>{
        try {
            const body = req.body
            const updateSchool = await School.updateMany({ 
                schoolName : body.schoolName,
                description : body.description,
                alsoSchool : body.alsoSchool,
                thresholdPoints : body.thresholdPoints,
                payment : body.payment,
                discount : body.discount,
                schoolImage : body.schoolImage,
                schooolLogo : body.schooolLogo
             })
            res.status(200).send({
                success:true,
                data:updateSchool
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
