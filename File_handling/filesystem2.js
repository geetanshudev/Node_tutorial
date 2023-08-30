const fs = require('fs');

/*
fs.writeFile('filenext.txt','hey this is new file',function(err,data){
    if(err) throw err;
    console.log('new text file created');
});

//we open this file 
fs.open('filenext.txt',function(err,data){
    if(err) throw err;
    console.log('we open the file');
});

//now we rename the file 
fs.rename('filenext.txt','filethird.txt',function(err){
    if(err) throw err;
    console.log('renamed file successfully');
});
*/
//now we append more data in our file 
var data = " now this is appended data you see i gonna talk about tartarian society , moon theory etc ";
fs.appendFile('filethird.txt',data,function(err,data){
    if(err) throw err;
    console.log('file updated go check out');

});

//now finally we delete the file 
fs.unlink('filethird.txt',function(err){
    if(err) throw err;
    console.log('file has been deleted');
});

