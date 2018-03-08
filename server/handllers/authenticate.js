var jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        console.log('OPTIONS SUCCESS');
        res.end();
    }
    // console.log("the authorization header is:" + req.headers.authorization);

    if (req.headers.authorization != null) {
        var token = req.headers.authorization

        jwt.verify(token, 'very-long-secret', function(err, decoded) {
            if (err) {
                console.log(err)
                res.status(401).end();
            }
            console.log(decoded) // bar
            req.userData = decoded; 
            next();
        });

    } else {
        res.status(401).send()
    }
};

module.exports = authenticate;