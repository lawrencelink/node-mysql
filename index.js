
//declare variables that will be used to create the connection to the database
//I guess these variables are imported from the other .js documents
var Connection       = require('./lib/Connection');
var ConnectionConfig = require('./lib/ConnectionConfig');
var Types            = require('./lib/protocol/constants/types');
var SqlString        = require('./lib/protocol/SqlString');

//exports object is created without a var
// If no var statement is found, that variable is assumed to be global
//does that make exports a global variable?
//according to http://blog.davidpadbury.com/2011/08/21/javascript-modules/
//Modules are evaluated in their own context and have a global exports variable made available to them
//This exports variable is just a plain old JavaScript object which you can attach things to
// To access a module you call a global require function and give an identifier for the package you are requesting
//so the exports object is a way to allow functions to be used in other files
//Does a file = a module???
//What module is requiring the index.js file/module?
//I only see "var mysql      = require('mysql');"

//.createConnection method defined
//per stackoverflow http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-nodejs-module-exports-and-how-do-you-use-it
//module.exports is the object that's actually returned as the result of a require call.
//The exports variable is initially set to that same object (i.e. it's a shorthand "alias"), so in the module code you would usually write something like this:
//var myFunc1 = function() { ... };
//var myFunc2 = function() { ... };
//exports.myFunc1 = myFunc1;
//exports.myFunc2 = myFunc2;

//when utilizing the create connection the mysql.createconnection is created with host, user and password parameters
//Does this mean that config passes these parameters?
//I find it really confusing how config is used 3 times below!
exports.createConnection = function(config) {
  return new Connection({config: new ConnectionConfig(config)});
};

//.createQuery function uses the Connection.createQuery function
exports.createQuery = Connection.createQuery;

//exports parameters defined
exports.Types    = Types;
exports.escape   = SqlString.escape;
exports.escapeId = SqlString.escapeId;
