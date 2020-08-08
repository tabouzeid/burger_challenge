const orm = require('../config/orm.js');

require('../config/orm.js');

function devourBurger(id, callback){
    orm.updateOne(id, true, callback);
}

function getAllBurgers(callback){
    orm.selectAll(callback);
}

function addBurger(name, callback){
    orm.insertOne([name, false], callback);
}

module.exports = {
    devourBurger: devourBurger,
    getAllBurgers: getAllBurgers,
    addBurger: addBurger
}