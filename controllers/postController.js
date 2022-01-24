import Post from '../models/Post.js';

//Create Post
export function createPost (req, res){
    const newPost = new Post(req.body);
    try {
      const savedPost =  newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
}

//All posts
export function allPosts(req, res){
    const newQuery = req.query.new;
  const qCategory = req.query.categories;
  try {
    let posts;
    if (newQuery) {
      posts =  Post.find().sort({createdAt: -1}).limit(5);
    } else if (qCategory) {
      posts =  Post.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      posts =  Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}

//post Details
export function postDetails(req, res){
    try {
        const post =  Post.findById(req.params.id);
        res.status(200).json(post);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete post
export function deletePost(req, res){
    const id = req.params.id;
    Post.findByIdAndDelete(id)
      .then(result => {
        res.json({ post: result });
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A POST
export function updatePost(req, res){
    const id = req.params.id;
    let updatedPost = {
        title: req.body.title,
        author: req.body.author,
        desc: req.body.desc,
        categories: req.body.categories,
        
    }
    Post.findByIdAndUpdate(id, {$set: updatedPost}).then(()=>{
        res.json({message:`Post updated successfully`});
    }).catch(err=>{
        res.json({message: err})
    })
}