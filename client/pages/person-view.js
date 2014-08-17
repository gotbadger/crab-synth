/*global app, alert*/
var PageView = require('./base');
var templates = require('../templates');
var Person = require('../models/person')


module.exports = PageView.extend({
    pageTitle: 'view experiment',
    template: templates.pages.personView,
    bindings: {
        'model.fullName': {
            role: 'name'
        },
        'model.dump' : {
            role: 'dump'
        },
        'model.dumpPlayhead' :{
            role: 'dumpPlayhead'
        },
        'model.avatar': {
            type: 'attribute',
            role: 'avatar',
            name: 'src'
        },
        'model.editUrl': {
            type: 'attribute',
            role: 'edit',
            name: 'href'
        }
    },
    events: {
        'click [role=delete]': 'handleDeleteClick',
        'click [role=action-stop]' : 'stopTick',
        'click [role=action-play]': 'startTick',
    },
    initialize: function (spec) {
        var self = this;
        self.model = new Person({id:spec.id});
        self.model.fetch();
    },
    handleDeleteClick: function () {
        this.model.destroy({success: function () {
            app.navigate('collections');
        }});
    },
    stopTick: function(){
        this.model.stopTick();
    },
    startTick: function(){
        this.model.startTick();
    }
});
