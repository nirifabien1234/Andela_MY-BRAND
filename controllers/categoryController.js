import Category from '../models/Category.js';

// Creating a new category for articles
export function createCategory  (req, res) {
  const newCat = new Category(req.body);
  try {
    const savedCat =  newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
}

// All categories
export function allCategory (req, res) {
    try {
      const cats =  Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
 }

//Category Details
export function categoryDetails(req, res){
    try {
        const category =  Category.findById(req.params.id);
        res.status(200).json(category);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete category
export function deleteCategory(req, res){
    const id = req.params.id;
    Category.findByIdAndDelete(id)
      .then(result => {
        res.json({ category: result });
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A category
export function updateCategory(req, res){
    const id = req.params.id;
    let updatedCategory = {
        name: req.body.name, 
    }
    Category.findByIdAndUpdate(id, {$set: updatedCategory}).then(()=>{
        res.json({message:`category updated successfully`});
    }).catch(err=>{
        res.json({message: err})
    })
}