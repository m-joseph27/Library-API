const CategoryModel = require('../models/category');
const MiscHelper = require('../helpers/helpers')


module.exports = {
  getIndex: (req, res) =>{
    return res.json({ message : 'WELCOME AND HALLO YUSUF DISINI!'})
  },
  getCategory: (req, res)=>{
    // const sort = req.query.sort;
    console.log(req.query)
    CategoryModel.getCategory()
    .then((result)=>{
      MiscHelper.response(res, result, 200);
    })
    .catch(err=>console.log(err));
  },

  insertCategory: (req, res)=>{
    const {name} = req.body;
    const data = {name}
    CategoryModel.insertCategory(data)
      .then((result) => {
        res.send(result);
      })
      .catch(err => console.log(err));
  },

  updateCategory: (req, res)=>{
    const {name} = req.id_Category;
    const data = {name}
    CategoryModel.updateCategory(data)
      .then((result) => {
        res.send(result);
      })
      .catch(err => console.log(err));
  },

  deleteCategory: (req) => {
    const Category = req.params.id
    CategoryModel.deleteCategory(Category)
      .then(() => {
        
      })
      .catch(err => console.log(err));
  },
}