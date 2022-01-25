import Category from '../models/Category.js';

// Creating a new category for articles
export async function createCategory  (req, res) {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
}

// All categories
export async function allCategory (req, res) {
    try {
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
 }

//Category Details
export async function categoryDetails(req, res){
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete category
export async function deleteCategory(req, res){
    const id = req.params.id;
    await Category.findByIdAndDelete(id)
      .then(result => {
        res.json({ category: result });
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A category
export async function updateCategory(req, res){
    const id = req.params.id;
    let updatedCategory = {
        name: req.body.name, 
    }
    const update = await Category.findByIdAndUpdate(id, {$set: updatedCategory}).then(()=>{
        res.json({message:`category updated successfully`, update});
    }).catch(err=>{
        res.json({message: err})
    })
}