const connection = require('./connection.js');

require('./connection.js');

// Object for all our SQL statement functions.
var orm = {
    selectAll: function selectAll(callback) {
        connection.query("SELECT * FROM burgers", function(err, resp){
            if(err){
                throw err;
            }
            callback(resp);
        });
    },
    insertOne: function insertOne(values, callback) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", 
                        values, 
        function(err, resp){
            if(err){
                throw err;
            }
            callback(resp);
        });
    },
    updateOne: function updateOne(id, devoured, callback) {
        connection.query("UPDATE burgers SET devoured=? WHERE id=?", [devoured, id], function(err, resp){
            if(err){
                throw err;
            }
            callback(resp);
        });
    },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
