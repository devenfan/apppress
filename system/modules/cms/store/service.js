var mongoose = require('../../../../framework/mongoose');
var http = require('http');
var url = require('url');

var Store = require('./model').Store;
var StoreModel = mongoose.model('Store', Store);

