var jwt = require('jsonwebtoken');
const verifyKey = (req,res) =>{
     if (req.method === 'OPTIONS') {
        res.end();
    }
    if(req.headers.authorization != null){
         jwt.verify(req.headers.authorization, 'very-long-secret', function(err, decoded) {
            if (err) {
                res.json(false);
            }
            // console.log(decoded.Role);
            res.json(decoded); 
            // res.json(true); 
        });

    } else {
        res.status(401).send()
    }
};


module.exports = verifyKey;