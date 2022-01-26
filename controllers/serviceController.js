import Service from '../models/Service.js';

import 'dotenv/config';
import * as fs from 'fs';
import cloudinary from '../helpers/imageUpload.js';

//Create Post


export async function  createService (req, res){
  try {
      cloudinary.uploader.upload(req.file.path, { tags: 'Service_photo' },async function (err, image) {
          if (err) {console.warn(err);}
          req.body.ServicePic = image.url
          const service = await Service.create(req.body);
          fs.unlinkSync(req.file.path)
          res.status(200).json({message: "Service creatred successfully", service});
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

//All Services
export async function allServices(req, res){
    const newQuery = req.query.new;
  
  try {
    let services;
    if (newQuery) {
      services =  await Service.find().sort({createdAt: -1}).limit(5);
    }
    else {
      services = await Service.find();
    }
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json(err);
  }
}

//post Details
export async  function serviceDetails(req, res){
    try {
        const service = await Service.findById(req.params.id);
        res.status(200).json(service);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete post
export async function deleteService(req, res){
    const id = req.params.id;
    await Service.findByIdAndDelete(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A POST
export async function updateService(req, res){
    const id = req.params.id;
    let updatedService = {
        title: req.body.title,
        service_desc: req.body.service_desc,
        
    }
    await Service.findByIdAndUpdate(id, {$set: updatedService}).then(()=>{
        res.json({message:`Service updated successfully`});
    }).catch(err=>{
        res.json({message: err})
    })
}