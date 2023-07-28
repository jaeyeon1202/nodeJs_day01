const http = require("http"); //import-> require / http: 통신규약
const fs = require("fs"); //파일 기능을 사용할 수 있게
/*
request : 사용자의 정보를 저장하는 객체
response : ㅏ사용자에게 응답하는 경우 사용하는 객체
*/
const app =http.createServer( (request, response)=>{ //http로 통신할 수 있는 서버를 만들겠다.
    console.log("연결되었습니다.");
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    console.log(request.url);    
    if(request.url=="/")
        response.end("default page");
    else if(request.url=="/test"){
        fs.readFile("./test.html", (err,data)=>{ //현재 위치의 html파일을 불러온다.
            //err없으면 null, err발생하면 err내용
            if(err){
                throw err;
            }
            response.end(data);
        });
       // console.log(test);
       // response.end("test page");
    }

    //response.end("sdsadadasd!");
} );
//app.listen(3000,"192.168.42.103"); // 포트번호:3000
app.listen(5000);