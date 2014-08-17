/*
use to debug json files
*/
var tickcount = 0;
var set = require('../data/110413/ANA110413026A_rdata.json');

var ticker = setInterval(tick, 100);

function tick() {
    tickcount++;
    lookup = set[(tickcount/10)];
    if(lookup !== undefined){
        console.log(lookup);
    }
}