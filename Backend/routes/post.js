import { Router } from "express";
import {getPost, createPost, updatePost, deletePost, getOPost, importExcel} from "../controllers/controller.js"
import excelToJson from 'convert-excel-to-json';
import fs from 'fs-extra';
import multer from 'multer';

var upload = multer({dest: "uploads/"})

const router = Router()

router.get('/post', getPost)

router.post('/posts', createPost)

router.put('/put/:id', updatePost)

router.delete('/delete/:id', deletePost)

router.get('/post/:id', getOPost)

router.post('/importExcel', upload.single("file") , importExcel)
//router.post('/importExcel', importExcel)

export default router