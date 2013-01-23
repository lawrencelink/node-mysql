
//declare variables that will be used to create the connection to the database
//I guess these variables are imported from the other .js documents
var Connection       = require('./lib/Connection');
var ConnectionConfig = require('./lib/ConnectionConfig');
var Types            = require('./lib/protocol/constants/types');
var SqlString        = require('./lib/protocol/SqlString');

//exports object created
//.createConnection function defined
exports.createConnection = function(config) {
  return new Connection({config: new ConnectionConfig(config)});
};

exports.createQuery = Connection.createQuery;

//exports parameters defined
exports.Types    = Types;
exports.escape   = SqlString.escape;
exports.escapeId = SqlString.escapeId;
