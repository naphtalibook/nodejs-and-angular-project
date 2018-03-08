var fs = require('fs');

class FileHandller{

    static writeToFile(path,data,callback) {
        fs.appendFile(path,data, (err, da) => {
            if (err) {
                callback(err);
            }
        }) 
    }
    // static readFromFile(path, callback){
    //     fs.readFile(path, function(err, data){
    //         if(err){
    //             callback(err);
    //         }else{ callback(data); }
    //     });
    // }
    static getAllDirFiles(){
    return new Promise((resolve,reject)=>{
      fs.readdir("uploads",(err,fileNames)=>{
        if(err) reject(err)
        else{
          resolve(fileNames);
        }
      })
  });
}

static convertTo64(path,picName){
    var bitmap = fs.readFileSync(path + picName);
    return new Buffer(bitmap).toString('base64');
}



}

module.exports = FileHandller;