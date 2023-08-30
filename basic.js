//hello world 
//console.log("Hello world !!");

//person detail and add details 
//it gives output as json file 
/*
let person =  {name:"Ashoke", id:23};
console.log(person);
person.age = 23;
person['address'] = "shanti nagar";
let em = "email";
person[em] = "Ashoke432@gmail.com";
console.log(" ");
console.log(person);


//element extractions fron json file 
 let data = {a:1,b:[21,22,23],c:{c1:311,c2:322},d:[{d1:411},{d2:422},{d3:433}]};
 console.log(data.a);
 console.log(data.b[0]);
 console.log(data.c.c1);
 console.log(data.d[1].d2);



//show message after 2 seconds 
const show = ()=>{
    console.log("this message apperas after 2 seconds ");

}
setTimeout(show,5000);


const show = ()=>{
    console.log("this message repeat after 2 seconds ");

}
setInterval(show,2000);


//program to pass function 
let fun1 = function () {
    console.log("this is function 1");
}
function fun2(task) {
    task();
    console.log("this is from function 2");
}
fun2(fun1);



//now we learn about modules
//for this we have create our module in separate file called mymodule,js and now we have to add it 

const add = require('./mymodule');
console.log(add(10,18));
console.log(add(12,12));
console.log(add(23,4));
console.log(add(89,7));



// now we have to show date and time with the help of module file called mydatetime.js
const dt = require('./mydatetime');
console.log("date and time :"+ dt.myDateTime());

// now we run this above and show it on our web browser 
//for we have to include 'http' and we have have to create a server

const http = require('http');
const dt = require('./mydatetime')

//now we create our server
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Date and Time : "+ dt.myDateTime());
    res.end();
    
}).listen(8080);


//now we learn about basic of http server and show some basic message 
const http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hello world");
    res.write("<br>this is next text ");
    res.write("<br>this is third text ");
    res.end();
}).listen(3456,'localhost',()=>{
    console.log("check the output on browser with localhost:3456");
});


//now we work on query 

const http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(3456,'localhost',()=>{
    console.log("check the output on browser with localhost:3456");
});



//now we see query split

const http = require('http');
const url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    const q = url.parse(req.url,true).query;
    var text = q.year+" "+q.month;
    res.end(text);
}).listen(3456,'localhost',()=>{
    console.log("check the output on browser with localhost:3456");
});

*/

//now we work with url module
const url = require('url');
const text = "http://localhost:5050/home.html?name=Goddam&age=21";
let q  = url.parse(text,true);
console.log("host = "+q.host);
console.log("path name = "+q.pathname);
console.log("query statement = "+q.search);
console.log(q.query);
