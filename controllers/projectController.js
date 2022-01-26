import Project from '../models/Project.js';

import 'dotenv/config';
import * as fs from 'fs';
import cloudinary from '../helpers/imageUpload.js';

//Create Post


export async function  createProject (req, res){
  try {
      cloudinary.uploader.upload(req.file.path, { tags: 'Project_photo' },async function (err, image) {
          if (err) {console.warn(err);}
          req.body.projectPic = image.url
          const project = await Project.create(req.body);
          fs.unlinkSync(req.file.path)
          res.status(200).json({message: "Project creatred successfully", project});
      });
  } catch (err) {
      const errors = handleError(err)
      res.status(409).json({message: errors});
  }
}


// export function createPost (req, res){
//   cloudinary.uploader.upload('https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png', {tags: 'Post_photo'}, async function(err, image){

//       if(err){console.log(err)};
//       console.log(image)
//       req.body.photo = image.url;
//       const post = await Post.create(req.body);
//       fs.unlinkSync(req.file.path)
//       res.status(200).send({message: "post creatred successfully", post: post });
//   });
// }
// createPost();

// export async function createPost (req, res){
//     const newPost = new Post(req.body);
//     try {
//       const savedPost = await newPost.save();
//       res.status(200).json(savedPost);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// }

//All projects
export async function allProjects(req, res){
    const newQuery = req.query.new;
  
  try {
    let projects;
    if (newQuery) {
      projects =  await Project.find().sort({createdAt: -1}).limit(5);
    }
    else {
      projects = await Project.find();
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
}

//post Details
export async  function projectDetails(req, res){
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete post
export async function deleteProject(req, res){
    const id = req.params.id;
    await Project.findByIdAndDelete(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A POST
export async function updateProject(req, res){
    const id = req.params.id;
    let updatedProject = {
        title: req.body.title,
        project_desc: req.body.project_desc,
        
    }
    await Project.findByIdAndUpdate(id, {$set: updatedProject}).then(()=>{
        res.json({message:`Project updated successfully`});
    }).catch(err=>{
        res.json({message: err})
    })
}