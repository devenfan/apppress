var service = require('./service');

//Rest Interface
exports.findAll = function (req, res) {
    return service.findAll(req, res);
};
exports.findById = function(req, res){
    return service.findById(req, res);
};

exports.save = function (req, res) {
    return service.save(req, res);
};

exports.update = function(req, res){
    return service.update(req, res);
};

exports.delete = function(req, res){
    return service.delete(req, res);
};