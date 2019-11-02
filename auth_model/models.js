// models/models.js
var UserMeta = require('./users.js');
var connection = require('./index.js');

var User = connection.define('users', UserMeta.attributes, UserMeta.options);
    // force: true will drop the table if it already exists
User.sync({
    force: true
//    match: /_servernew$/  // REGEX FOR DATABASE NAME
}).then(function() {
    // Table created
    return User.create();
});
// you can define relationships here
module.exports.User = User;