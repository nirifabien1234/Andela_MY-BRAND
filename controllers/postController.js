import Post from '../models/Post.js';

//Create Post
export async function createPost (req, res){
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
}

//All posts
export async function allPosts(req, res){
    const newQuery = req.query.new;
  const qCategory = req.query.categories;
  try {
    let posts;
    if (newQuery) {
      posts =  await Post.find().sort({createdAt: -1}).limit(5);
    } else if (qCategory) {
      posts = await Post.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}

//post Details
export async  function postDetails(req, res){
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete post
export async function deletePost(req, res){
    const id = req.params.id;
    await Post.findByIdAndDelete(id)
      .then(result => {
        res.json({ post: result });
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A POST
export async function updatePost(req, res){
    const id = req.params.id;
    let updatedPost = {
        title: req.body.title,
        author: req.body.author,
        desc: req.body.desc,
        categories: req.body.categories,
        
    }
    await Post.findByIdAndUpdate(id, {$set: updatedPost}).then(()=>{
        res.json({message:`Post updated successfully`});
    }).catch(err=>{
        res.json({message: err})
    })
}