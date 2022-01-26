import Comment from '../models/Comment.js';

// import 'dotenv/config';
import * as fs from 'fs';
import cloudinary from '../helpers/imageUpload.js';

//Create Post


// export async function  createComment (req, res){
//   try {
//       cloudinary.uploader.upload(req.file.path, { tags: 'Comment_photo' },async function (err, image) {
//           if (err) {console.warn(err);}
//           req.body.CommentPic = image.url
//           const Comment = await Comment.create(req.body);
//           fs.unlinkSync(req.file.path)
//           res.status(200).json({message: "Comment creatred successfully", Comment});
//       });
//   } catch (err) {
//       const errors = handleError(err)
//       res.status(409).json({message: errors});
//   }
// }



export async function createComment (req, res){
    const newComment = new Comment(req.body);
    try {
      const savedComment= await newComment.save();
      res.status(200).json(savedComment);
    } catch (err) {
      res.status(500).json(err);
    }
}

//All Comments
export async function allComments(req, res){
    const newQuery = req.query.new;
  
  try {
    let comments;
    if (newQuery) {
      comments =  await Comment.find().sort({createdAt: -1}).limit(5);
    }
    else {
      comments = await Comment.find();
    }
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
}

//post Details
export async  function commentDetails(req, res){
    try {
        const comment = await Comment.findById(req.params.id);
        res.status(200).json(comment);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete post
export async function deleteComment(req, res){
    const id = req.params.id;
    await Comment.findByIdAndDelete(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
}
// // UPDATE A POST
// export async function updateComment(req, res){
//     const id = req.params.id;
//     let updatedComment = {
//         title: req.body.title,
//         Comment_desc: req.body.Comment_desc,
        
//     }
//     await Comment.findByIdAndUpdate(id, {$set: updatedComment}).then(()=>{
//         res.json({message:`Comment updated successfully`});
//     }).catch(err=>{
//         res.json({message: err})
//     })
// }