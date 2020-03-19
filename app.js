// 引入模块
const express = require("express");
const mysql = require("mysql");

// 创建服务
var server = express();
server.listen(8080);
console.log("启动服务....");

// 创建连接池
var pool = mysql.createPool({
  host: "w.rdc.sae.sina.com.cn",
  user: "3x03lx3551",
  password: "2kjhhwy4i1wkhmwmwl01jym0zixikk5jlm42z23z",
  database: "app_swatchserve",
  port: 3306,
  connectionLimit:15
})

// 1：商品列表
server.get("/list", (req, res) => {
  var sql = "select title,subtitle from sh_list_family";
  pool.query(sql, (result, err) => { 
    if (err) throw err;
    res.send(result);
  })
})