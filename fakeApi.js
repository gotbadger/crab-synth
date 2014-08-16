var _ = require('underscore');

var people = [
    {
        id: 'ANA110413019A_rdata',
        setName: 'ANA1104130',
        experimentName: '19A',
        data: {}
    },
        {
        id: 'ANA110413026A_rdata',
        setName: 'ANA1104130',
        experimentName: '26A',
        data: {}
    },
];

function getExperiment(id) {
    return _.findWhere(people, {id: id});
}

exports.name = 'fake_api';
exports.version = '0.0.0';
exports.register = function (plugin, options, next) {
    plugin.route({
        method: 'GET',
        path: '/api/people',
        handler: function (request, reply) {
            reply(people);
        }
    });

    // plugin.route({
    //     method: 'POST',
    //     path: '/api/people',
    //     handler: function (request, reply) {
    //         var person = request.payload;
    //         person.id = id++;
    //         people.push(person);
    //         reply(person).code(201);
    //     }
    // });

    plugin.route({
        method: 'GET',
        path: '/api/people/{id}',
        handler: function (request, reply) {
            var found = getExperiment(request.params.id);
            reply(found).code(found ? 200 : 404);
        }
    });

    // plugin.route({
    //     method: 'DELETE',
    //     path: '/api/people/{id}',
    //     handler: function (request, reply) {
    //         var found = get(request.params.id);
    //         if (found) people = _.without(people, found);
    //         reply(found).code(found ? 200 : 404);
    //     }
    // });

    // plugin.route({
    //     method: 'PUT',
    //     path: '/api/people/{id}',
    //     handler: function (request, reply) {
    //         var found = get(request.params.id);
    //         if (found) _.extend(found, request.payload);
    //         reply(found).code(found ? 200 : 404);
    //     }
    // });

    next();
};
