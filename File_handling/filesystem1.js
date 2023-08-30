//in Node.js we can also file handling system in which we can create,write,append,update,delete
//for these we have to require fs which is file system
//first we open and create the file

var fs = require('fs');
fs.writeFile('newfile.txt','w',function(err,data){
    if(err) throw err;
    console.log('your file has been created');
});

//now we append data into our file 
var data = " hey i append the data in the file ";
fs.appendFile('newfile.txt',data,function(err,data){
    if(err) throw err;
    console.log('your file has been updateed !!');
});

//now we read this file 
fs.readFile('newfile.txt',function(err,data){
    if(err){
        console.error(err);

    }
    console.log(data.toString());
});
console.log("output of file :-");

//now we open the file 
fs.open('newfile.txt','w',function(err,data){
    if(err) throw err;
    console.log('your file has been opened');
});

//now we delete the file 
/*
fs.unlink('newfile.txt',function(err){
    if(err) throw err;
    console.log('file has been deleted');
});
*/