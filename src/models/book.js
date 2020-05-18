require('dotenv').config()
const connection = require('../configs/db');

module.exports = {
  getBooks: (search, descending, ascending) =>{
    return new Promise((resolve, reject)=>{
      if(search){
        connection.query("SELECT book.*, category.name FROM book JOIN category ON book.id_category = category.id WHERE author LIKE ? OR description LIKE ? OR title LIKE ? ",[`{search}%`, `%${search}%`, `%${search}%`], (err, result) => {
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      } else if(descending){
        connection.query("SELECT book.* FROM book ORDER BY " + descending + " DESC ", (err, result)=>{
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      }else if(ascending){
        connection.query("SELECT book.* FROM book ORDER BY " + ascending + " ASC", (err, result)=>{
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      }else{
        connection.query("SELECT book.*, category.name FROM book JOIN category ON book.id_category = category.id", (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  getPage: (page, total)=> {
    const dataPage = 3;
    const totalPage = total / dataPage;
    const firstData = dataPage * page - dataPage;
    return new Promise((resolve,reject)=> {
      connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id ORDER BY book.id ASC LIMIT ?, ?",[firstData, dataPage], (err,result)=> {
        if(!err){
          const allPage = Math.ceil(totalPage);
            if(page <= allPage){
              resolve([allPage, `Current Page: ${page}`,result])}
            } else {
              reject(new Error(err))
            }
        })
    })
  },
  bookDetail: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT book.*, category.name FROM book INNER JOIN category ON book.id_category = category.id WHERE book.id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertBook: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO book SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateBook: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE book SET ? WHERE id= ?", [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM book WHERE id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}