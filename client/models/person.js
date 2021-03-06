var AmpersandModel = require('ampersand-model');
var _ = require('underscore');


module.exports = AmpersandModel.extend({
    urlRoot: '/api/people',
    props: {
        id: 'any',
        setName: ['string', true, ''],
        experimentName: ['string', true, ''],
        data: 'any',
        playhead: ['int', true, 0],
        playing: 'any',
        //coolnessFactor: ['number', true, 5]
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        dump: {
            deps: ['playhead','data'],
            fn: function(){
                if(this.data === undefined){
                    return "LOADING....";
                }
                lookup = this.data[(this.playhead/10)];
                if(lookup !== undefined){
                    this.playing = lookup;
                }
                //console.log(this.playing.value1);
                if(this.playhead>0){
                    var keysnotes = (_.keys(me.synth.notemap));
                    var keysdata = (_.without(_.keys(this.playing),'time'));
                    var self = this;
                    _.each(keysdata,function(elm,i){
                        me.synth.play(keysnotes[i],self.playing[elm]);
                    });
                    //me.synth.play('C3',this.playing.value3);
                    //me.synth.play('D3',this.playing.value2);
                    //me.synth.play('G3',this.playing.value1);
                }else{
                    me.synth.stop();
                }
                return JSON.stringify(this.playing,0,2);
            }
        },
        dumpPlayhead:{
            deps: ['playhead'],
            fn: function(){
                return this.playhead/10;
            }
        },
        fullName: {
            deps: ['setName', 'experimentName'],
            fn: function () {
                return this.setName + ' (' + this.experimentName+ ')';
            }
        },
        avatar: {
            deps: ['setName', 'experimentName'],
            fn: function () {
                return 'http://robohash.org/' + encodeURIComponent(this.fullName) + '?size=80x80';
            }
        },
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/person/' + this.id + '/edit';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/person/' + this.id;
            }
        },
    },
    stopTick: function(){
        if(this.ticker){
            clearInterval(this.ticker);
        }
        this.playhead = 0;
        console.log("stop ticking");
    },
    startTick: function(){
        var self = this;
        if(this.ticker){
            this.stopTick();
        }
        this.ticker = setInterval(function(){
            //console.log("move playhead");
            self.playhead++;
        }, me.rate );

        console.log("start ticking"); 
    },



});
