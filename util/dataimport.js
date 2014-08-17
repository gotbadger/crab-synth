/*
    worlds most ugly CSV parser
*/

var argv = require('minimist')(process.argv.slice(2));
var filepath = argv.file;
var fs = require('fs');
var _ = require('underscore');
var path = require('path');
if(!filepath){
    console.log("usage: node dataimport.js --file=/somepath/some.csv > outfile.csv");
    process.exit();
}

var derivedpath =  path.normalize(__dirname +'/../' + filepath);


fs.readFile(derivedpath, function (err, data) {
  var derivedfile = path.basename(derivedpath);
  var dreiveddir = path.dirname(derivedpath).split(path.sep).reverse()[0];
  if (err) {
    throw err; 
  }
  var out = {
    data: {}
  };
  out.setName = dreiveddir;
  //horribe thing to work out experiment name from path and ther stuff
  out.experimentName = derivedfile.split('.')[0].replace('ANA'+dreiveddir,'').replace('_rdata','');
  var line = data.toString().split('\r\n');
  console.log("experiment",out.setName,out.experimentName,"detected");
  var titles = line[0].split(",");
  delete(line[0]);
  _.each(line,function(row){
    var cells = row.split(",");
    //only parse rows that have correct number of elms
    if(cells.length == titles.length){
        //index by time force time numeric coerce
        var time = cells[0];
        //bang the rest of the data in output objet 
        out.data[time] = _.object(titles,cells);
    }
  });
  var target = __dirname+"/../data/"+derivedfile.split('.')[0]+'.json';
  console.log("writing",target)
  fs.writeFile(
    target,
    JSON.stringify(out), 
    function(err) {
      if(err) {
          //figure it out!
          throw err
      } else {
          console.log("wrote: ",target);
      }
    });
});

