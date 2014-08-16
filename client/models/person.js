var AmpersandModel = require('ampersand-model');
var _ = require('underscore');


module.exports = AmpersandModel.extend({
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
            deps: ['data','playhead'],
            fn: function(){
                lookup = this.data[(this.playhead/10)];
                if(lookup !== undefined){
                    this.playing = lookup;
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
        console.log("stop ticking");
    },
    startTick: function(){
        var self = this;
        if(this.ticker){
            this.stopTick();
        }
        this.ticker = setInterval(function(){
            console.log("move playhead");
            self.playhead++;
        }, 1000 );

        console.log("start ticking"); 
    },



});
