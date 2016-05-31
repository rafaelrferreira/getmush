var phManager = require('./phantomManager.js');
var requests = []

exports.PushRequest = function(url, email, cb){
    requests.push(OnMushProcessCallback(url, email));
    if(cb){
      cb();
    }
}

exports.PopRequest = function(){
    console.log("Chegou " + requests.length);
    if(requests.length > 0){
        requests.pop();
        /*if(p){
          console.log("FUNÇÃO EXECUTADAAAAAAAAAAAA");
          p();
        } else {
          console.log("PORRA É ESSA?");
        }*/
    }
}

exports.GetRequests = function(){
    return requests;
}

function OnMushProcessCallback(url, email){
  phManager.mushMushProcess(url, email);
}