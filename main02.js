/**
 ejs : html내에서 node의 문법을 사용할 수 있다.
    <% %>를 사용하여 node의 변수를 사용할 수 있다.
    npm install ejs --save
 */

const express = require("express");
const app = express();

//views: 해당 위치에 ejs 파일이 존재한다는 명시
app.set("views","./"); 
// ejs 문법을 사용할 수 있게 설정
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    //res.end("기본 페이지 연동")
    res.render("index");
    //파일을 보낼때는 render라는 기능을 이용 / index:파일명(index.ejs)
});
app.get("/test", (req,res)=>{
    res.end("test페이지 연동")
});
app.listen(3000,()=>{console.log("3000 server 연동")});