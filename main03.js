const express = require("express");
const app = express();

app.set("views", "./views"); //(파일명, 경로)
app.set("view engine", "ejs");

app.get("/", (req, res)=>{ //기본페이지는 /(슬러시)
    res.render("index", {key: "value"}); //파일에 대한 위치 /값을 넘겨줄때는 키와 벨류 형식
})

app.get("/login", (req,res)=>{
    const name = "홍길동";
    res.render("login", {n:name});
})

app.get("/logout", (req,res)=>{
    const context = {
        key1: "값-1", 
        key2: "값-2",
        key3: [10, 20, 30],
        key4: {k1:"k11", k2:"k22"}
    }
    res.render("logout", {context:context});
})

app.get("/member", (req,res)=>{
    context={
        arr: ['홍길동', '20살', '산골짜기'],
        obj:{'name':'김개똥', 'age':'30살', 'addr':'개똥별'},
        name:'고길동', 'age':'40살', 'addr':'마포구'
    }
    res.render("member", {context:context});
})

app.get("/for", (req,res)=>{
    const arr = ["홍길동","김개똥","고길똥"];
    res.render("for", {name:arr});
})

app.get("/if", (req,res)=>{
    res.render("if");
})

app.get("/for_quiz", (req,res)=>{
    context={
        "rank":[
            [1, 2, 3, 4, 5],
            ["육", 7, "팔", "구", "10"],
            [11, 12, 13, 14, 15]
        ]
    };
    res.render("for_quiz", context);
})

app.get("/url_quiz", (req,res)=>{
    context={
        "url":[
            {"네이버":"https://www.naver.com/"},
            {"구글":"https://www.google.co.kr/"},
            {"다음":"http://www.daum.net/"} 
        ]
    };
    res.render("url_quiz", context);
});

app.listen(3000, ()=>{console.log("서버연동성공")});