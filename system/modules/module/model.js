var config = require('../../../config');
var mongoose = require('../../../framework/mongoose');

var moduleSchema = new mongoose.Schema({
    code: String,
    name: String,
    title: String,
    descr: String,
    type: Number,
    status: Number,

    createTime: Date,
    updateTime: Date
}, config.schemaOptions);
var module = mongoose.model('system_module', moduleSchema);
moduleSchema.virtual('id').get(function() {
    return this._id;
});
exports.Module = module;

module.find().exec(function (err, objs) {
    if (!err) {
        if (objs.length === 0) {
            module.create(
                {code: 'album',  name: '相册', title: '相册', status: 1, type: 0, createTime: new Date()},
                {code: 'event',  name: '事件', title: '事件', status: 1, type: 0, createTime: new Date()},
                {code: 'video',  name: '视频', title: '视频', status: 1, type: 0, createTime: new Date()},
                {code: 'store',  name: '商店', title: '商店', status: 1, type: 0, createTime: new Date()},
                {code: 'coupon', name: '优惠券', title: '优惠券', status: 1, type: 0, createTime: new Date()},
                {code: 'preference', name: '配置', title: '配置', status: 1, type: 0, createTime: new Date()},
                function (err, small) {
                    if (err) return handleError(err);
                        console.log('Init Module db successfully!!!');
                }
            )
        }
    }
});



