/*
    worlds most ugly CSV parser
*/

var argv = require('minimist')(process.argv.slice(2));
var filepath = argv.file;
var fs = require('fs');
var _ = require('underscore');

if(!filepath){
    console.log("usage: node dataimport.js --file=/somepath/some.csv > outfile.csv");
    process.exit();
}

fs.readFile( __dirname + filepath, function (err, data) {
  if (err) {
    throw err; 
  }
  var line = data.toString().split('\r\n');
  var out = {};
  var titles = line[0].split(",");
  delete(line[0]);
  _.each(line,function(row){
    var cells = row.split(",");
    //only parse rows that have correct number of elms
    if(cells.length == titles.length){
        //index by time force time numeric coerce
        var time = cells[0];
        //bang the rest of the data in output objet 
        out[time] = _.object(titles,cells);
    }
  });
  console.log(JSON.stringify(out));
  //console.log(out);
});

