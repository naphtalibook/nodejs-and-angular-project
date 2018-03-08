var express=  require('express');
var countryRouter = express.Router();
var countries = require('../models/countries');
var fs = require('fs');
var fileHandler = require('../handllers/fileHandler');
var favorits = require('../models/faviorits');

//get all names
countryRouter.get('/allNames', (req, res) =>{
    let allNames = countries.map(country => country.name);
    res.send(allNames);
    fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: allNames\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    })
});
//get by name
countryRouter.get('/name/:name', (req, res) =>{
    let country = countries.filter(country => country.name === req.params.name);
    res.send(country);
    fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: name = ' + req.params.name + '\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get by population number
countryRouter.get('/population', (req, res) =>{
    let countriesByPopulatiton = countries.filter( country => country.population >= (req.query.min * 1000000) && country.population <= (req.query.max * 1000000));
    res.send(countriesByPopulatiton);
    fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by population number = ' + req.query.min + ' - ' + req.query.max +'\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get by area
countryRouter.get('/area', (req, res) =>{
    let countriesByArea = countries.filter( country => country.area >= req.query.min && country.area <= req.query.max );
    res.send(countriesByArea);
     fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by area = ' + req.query.min + ' - ' + req.query.max +'\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get by area and population
countryRouter.get('/globalstats', (req, res) =>{
    let countriesByAreaAndPopulation = countries.filter( country => country.area >= req.query.minArea && country.area <= req.query.maxArea && country.population >= (req.query.minPop * 1000000) && country.population <= (req.query.maxPop * 1000000));
    res.send(countriesByAreaAndPopulation);
     fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by area and population number  \n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get border country area
countryRouter.get('/borders/:country', (req, res) =>{
    let borderCountriesCode;
    let borderCountriesSize = [];
    let countryParam = capitalizeFirstLetter(req.params.country)
    borderCountriesCode = countries.filter( country => country.name == countryParam);
    if(borderCountriesCode[0].borders != null){
        for (var i = 0; i < borderCountriesCode[0].borders.length; i++) {
            for (var k = 0; k < countries.length; k++) {
                if(borderCountriesCode[0].borders[i] == countries[k].alpha3Code){
                    borderCountriesSize.push(countries[k]);
                } 
            }
        }
        res.send(borderCountriesSize);
    }else{
        res.send('no match');
    }
    fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by Neighbor = ' + req.params.country + '\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get countries with the most Languages
countryRouter.get('/maxLang', (req, res) =>{
  let mostLanguages = [countries[0]];
  for (var i = 0; i < countries.length; i++) {
      if(countries[i].languages.length > mostLanguages[mostLanguages.length -1].languages.length){
          mostLanguages = [countries[i]];
      }else if(countries[i].languages.length == mostLanguages[mostLanguages.length -1].languages.length){
          mostLanguages.push(countries[i])
      }
  }
    res.send(mostLanguages);
      fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: most lang \n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get countries by capital
countryRouter.get('/capital', (req, res) =>{
    let param = capitalizeFirstLetter(req.query.name);
    let countriesByCapital = countries.filter( country => country.capital.includes(param));
    res.send(countriesByCapital);
    fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by capital = ' + req.query.name + '\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get countries by utc
countryRouter.get('/utc', (req, res) =>{
    let countriesByUtc = [];
    for (var i = 0; i < countries.length; i++) {
        for (var k = 0; k < countries[i].timezones.length; k++) {
            if(countries[i].timezones[k] !== 'UTC'){
                if( countries[i].timezones[k].match(/\d+/g).join(".") >= parseInt(req.query.utcMin) && countries[i].timezones[k].match(/\d+/g).join(".") <= parseInt(req.query.utcMax)){
                    countriesByUtc.push(countries[i]);
                }
            }      
        }  
    }
    res.send(countriesByUtc);
    fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by UTC = ' + req.query.name + '\n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get countries by globe square
countryRouter.get('/square', (req, res) =>{
    let countriesBySquare = [];
    console.log(req.query);
    for (var i = 0; i < countries.length; i++) {
        if(countries[i].latlng[0] > parseInt(req.query.bottomRightX) && countries[i].latlng[0] < parseInt(req.query.topLeftX) && countries[i].latlng[1] > parseInt(req.query.bottomRightY) && countries[i].latlng[1] < parseInt(req.query.topLeftY)){
            countriesBySquare.push(countries[i]);
        }      
    }
    //http://localhost:3003/countries/square?topLeftX=40&topLeftY=60&bottomRightX=30&bottomRightY=70
    res.send(countriesBySquare);
        fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by lanlat \n', (err)=>{
        if(err){
            console.log('problem with writing');
        }
    });
});
//get countries by calling code
countryRouter.get('/callingCodes/:numOfDigits', (req, res) =>{
    let countriesByCallingCode = [];
    for (var i = 0; i < countries.length; i++) {
        for (var k = 0; k < countries[i].callingCodes.length; k++) {
            if(parseInt(req.params.numOfDigits) === countries[i].callingCodes[k].length ){
                countriesByCallingCode.push(countries[i]);
            }
        }    
    }
    //localhost:3003/countries/callingCodes/2
    res.send(countriesByCallingCode.sort());
        fileHandler.writeToFile('./logger.txt',"id: " + req.cookies.key + ' => req: by calling code = ' + req.params.numOfDigits +'\n', (err)=>{
            if(err){
                console.log('problem with writing');
            }
        });
});
//post favorits
countryRouter.post('/favorits',(req, res) =>{
    let country = new addToFavorits(req.cookies.key, req.body);
    favorits.push(country);
});
// get favorits
countryRouter.get('/favorits',(req, res) =>{
    let favoritsByKey = favorits.filter( favorit => favorit.key == req.cookies.key).map(f => f.country);
    res.send(favoritsByKey);
});

//get logger of countries
countryRouter.get('/logger', (req, res) =>{
    fs.readFile('./logger.txt','utf8', (err, data) =>{
    res.send(data);
    });
    
});



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function addToFavorits(_key, _country){
    this.key = _key;
    this.country = _country;
}


// console.log(countries[36].timezones[0].match(/\d+/)[0] );
module.exports = countryRouter;




