

// var synth = T("OscGen", {wave:"sin", mul:0.25}).play();

// var keydict = T("ndict.key");
// var midicps = T("midicps");
// T("keyboard").on("keydown", function(e) {
//   var midi = keydict.at(e.keyCode);
//   if (midi) {
//     var freq = midicps.at(midi);
//         console.log(parseInt(freq)); 
//     synth.noteOnWithFreq(freq, 100);
//   }
// }).on("keyup", function(e) {
//   var midi = keydict.at(e.keyCode);
//   if (midi) {
//     synth.noteOff(midi, 100);
//   }
// }).start();