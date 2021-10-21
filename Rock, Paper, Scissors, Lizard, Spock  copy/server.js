//Collaborated with Team Hayden to successfully complete project 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    let computerChoice =  randomizer() 
  
    if('choice' in params){
      if(params['choice']== 'rock'){
        let result = computerChoice.rock
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = { 
          computerChoiceName: computerChoice.name,
          result: result,
          
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['choice'] == 'paper'){
        let result = computerChoice.paper
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          computerChoiceName: computerChoice.name,
          result: result
          
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['choice'] == 'scissors'){
        let result = computerChoice.scissors
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          computerChoiceName: computerChoice.name,
          result: result
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['choice'] == 'lizard'){
        let result = computerChoice.lizard
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          computerChoiceName: computerChoice.name,
          result: result,
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['choice'] == 'spock'){
        let result = computerChoice.spock
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          computerChoiceName: computerChoice.name,
          result: result,
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }
  }//else if
  
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
function randomizer(){      // helper function 
  let random = Math.random()
  let computerChoice = {}
  if(random <= .2){
    computerChoice = choiceRock
  }else if (random <= .4){
    computerChoice = choicePaper
  }else if (random <= .6){
    computerChoice = choiceScissors
  }else if (random <= .8){
    computerChoice = choiceLizard
  }else{
    computerChoice = choiceSpock
  }
  return computerChoice
  
  }
  const choiceRock = {rock:'draw', paper:'win', scissors:'lose', lizard:'lose', spock:'win', name:'rock'}
const choicePaper = {rock:'lose', paper:'draw', scissors:'win', lizard:'win', spock:'lose',name:'paper'}  
const choiceScissors = {rock:'win', paper:'lose', scissors:'draw', lizard:'lose', spock:'win' ,name:'scissors'}
const choiceLizard = {rock:'win', paper:'lose', scissors:'win', lizard:'draw', spock:'lose', name:'lizard'}
const choiceSpock = {rock:'lose', paper:'win', scissors:'lose', lizard:'win', spock:'draw' , name:'spock'}

server.listen(8000); // port at this point any message this whole file will get notfied 
// Collaborated with Team Hayden to successfully complete project 
