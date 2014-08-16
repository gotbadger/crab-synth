var AmpersandModel = require('ampersand-model');
var _ = require("underscore");
//var T = require("timbre");
module.exports = AmpersandModel.extend({
    props: {
        s: 'any'
    },
    notemap: {
        'C3': 261,
        'D3': 293,
        'E3': 329,
        'F3': 349,
        'G3': 391,
        'A3': 440,
        'G3': 493,
        'C4': 523,
        'D4': 587,
        'E4': 649
    },
    initialize: function(){
        //this.s = window.T("OscGen", {wave:"sin", mul:0.25}).play();
        console.log("synth init!");
    },
    play:function(note,mod){
        console.log(arguments);
        if(!this[note]){
            this[note] = T("sin", {freq:880, mul:0.2}).play();
        }
        //freq = 261;
        freq = this.notemap[note];
        //console.log(arguments);
        freq+=(mod*1);
        //console.log(freq);
        this[note].freq.value = freq*1;
    },
    stop:function(){
        console.log("stopping synth");
        var self = this;
        _.each(_.keys(this.notemap),function(note){
            if(self[note]){
                console.log("killed synth", note);
                self[note].pause();
                self[note] = null;     
            }     
        });         
    }


    
});
