/*global app, alert*/
var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'view experiment',
    template: templates.pages.personView,
    bindings: {
        'model.fullName': {
            role: 'name'
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
        'click [role=delete]': 'handleDeleteClick'
    },
    initialize: function (spec) {
        console.trace();
        var self = this;
        app.people.getOrFetch(spec.id, {all: true}, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    },
    handleDeleteClick: function () {
        this.model.destroy({success: function () {
            app.navigate('collections');
        }});
    }
});
