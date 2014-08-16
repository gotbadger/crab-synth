var tickcount = 0;
var set = {
    1.1:{msg: "foo1" },
    2.4:{msg: "foo2" },
    3:{msg: "foo3" },
    5:{msg: "foo4" }
};

var ticker = setInterval(tick, 100);

function tick() {
    tickcount++;
    lookup = set[(tickcount/10)];
    if(lookup !== undefined){
        console.log(lookup);
    }
}