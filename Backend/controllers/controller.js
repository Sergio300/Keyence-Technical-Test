import { request } from 'express';
import create from '../models/create.js';
import xlsx from 'xlsx'
import excelToJson from 'convert-excel-to-json';
import fs from 'fs-extra';
import multer from 'multer';

export const getPost = async(req, res) => {
    
    try {
        const post = await create.find()
        res.send(post)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}

export const createPost = async(req, res) => {

    try {

        const {User_ID,	User_Name, Date, Punch_In, Punch_Out} = req.body
        const createnew = new create({User_ID,	User_Name, Date, Punch_In, Punch_Out})
        
        console.log(createnew)
        await createnew.save()
        return res.json(createnew)
        
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}

export const updatePost = async (req, res) => {

    try {
        console.log(req.params)
        console.log(req.body)
        const updateData = await create.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(updateData)        
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }


}

export const deletePost =  async (req, res) => {

    try {
        const dateDelete = await create.findByIdAndDelete(req.params.id)

        if (!dateDelete) return res.sendStatus(404)
    
        return res.sendStatus(204)    
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}

export const getOPost = async (req, res) => {

    try {
        const getOnePost = await create.findById(req.params.id)
    if(!getOnePost) return res.send('Dont match')

    return res.json(getOnePost)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const importExcel = async (req, res) => {

    try {

        if (req.file?.filename == null || req.file?.filename == 'undefined') {

            res.status(400).json("No File")

        }

        else {
            var filePath = 'uploads/' + req.file.filename;

            const excelData = excelToJson({
                sourceFile: filePath,
                header: {
                    rows: 1
                },
                columnToKey: {
                    A: 'User_ID',
                    B: 'User_Name',
                    C: 'Dates',
                    D: 'Punch_In',
                    E: 'Punch_Out'
                }

            });
            fs.remove(filePath)
            res.status(200).json(excelData)   

                var newData = {}
                var i = 0

                await excelData.Sheet1.map( function (elem) {
                let data = { User_ID: elem.User_ID, User_Name: elem.User_Name, Dates: elem.Dates, Punch_In: elem.Punch_In, Punch_Out: elem.Punch_Out};
                    newData [i] = data
                    const importData = new create(newData[i])
                    i++;
                    importData.save()
                });

            console.log("Data Save");
        }
    } catch (error) {

        console.error(error.message)

        return res.status(500).json({ message: error.message })
        
    }

}