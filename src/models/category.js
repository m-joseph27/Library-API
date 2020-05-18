require('dotenv').config()
const connection = require('../configs/db');

module.exports = {
  getCategory: () =>{
    return new Promise((resolve, reject)=>{
      let sort = true;
      if(sort){
        connection.query("SELECT * FROM category", (err, result) => {
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      // }else{
      //   connection.query("SELECT book.*, category.name FROM book JOIN category ON book.id_category = category.id", (err, result) => {
      //     if (!err) {
      //       resolve(result)
      //     } else {
      //       reject(new Error(err))
      //     }
      //   })
      }
    })
  },
  CategoryDetail: () => {
    return new Promise((resolve, reject)=>{
      if(sort){
        connection.query("SELECT * FROM category", (err, result) => {
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      }
    })
  },
  insertCategory: (name) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO category SET ?", name, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCategory: (id_Category) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE category SET ? WHERE name= ?", [id_Category], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCategory: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM book WHERE name = ?", id_Category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}
