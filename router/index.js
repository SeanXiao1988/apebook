//向应用注册路由
var book = require('./book');
var user = require('./user');
var github = require('./github');
var ctlIndex = require('../controller/index');
var _ = require('../base/util');

module.exports = function(app){
    //首页
    app.get('/',ctlIndex.index);

    book(app);
    user(app);
    github(app);
};