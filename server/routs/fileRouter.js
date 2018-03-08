var express=  require('express');
var fileRouter = express.Router();
var fs = require('fs');
var fileHandler = require('../handllers/fileHandler');
var likes = require('../models/likes');

fileRouter.post("/upload",(req,res)=>{
  if(!req.files){ //if files is null
    res.status(400);
    res.send("No Files");
  }else{
    try{
      fs.writeFile('uploads/' + req.files.fileToUpload.name ,req.files.fileToUpload.data, (err) => {
        if (err) res.status(409).send(err);
        else{
            //write like
            likes.push(new Like(req.files.fileToUpload.name));
            res.json("picture saved");
        } 

      });
    }catch(ex){
       res.status(409).send(ex);
    }

  }
});

fileRouter.get("/getPictures",(req,res)=>{
  //fileHandler.getAllDirFiles().then((response)=>{
    res.send(likes);
      //let data = [];
      //let flag = 0;
    
    // for (var i = 0; i < response.length; i++) {
    //     for (var k = 0; k < likes.length; k++) {
    //         if(likes[k].imgName === response[i]){
    //             data.push(new finalData(response[i], likes[k].likes));
    //             flag = 1;
    //         }
    //     }
    //     if(flag === 0){
    //         data.push(new finalData(response[i], 0));
    //     }
    //     flag = 0;
    // }
    // res.send(data);
  // }).catch(err=>{
  //   console.log(err)
  // })
 });
 //like operation
 fileRouter.get('/like/:img', (req,res) => {
    for (var i = 0; i < likes.length; i++) {
        if(likes[i].imgName == req.params.img){
            likes[i].likes++;
            console.log('like added');
            res.json(likes[i].likes);
        }
    }
    
 });

 function Like(_imgName){
    this.imgName = _imgName;
    this.likes = 0;
 }
 function finalData(_imgName,_numOfLikes){
    this.imgName = _imgName;
    this.likes = _numOfLikes;
 }




module.exports = fileRouter;