const db = require('../Database/dbConection')

module.exports = class ListModel {

    static getAllLists(callback) {
        return db.query("select * from lists", callback)
    };

    static addList(list, callback) {
        return db.query("insert into lists (title) values (?)", [list.title], callback);
    };

    static delList(id, callback) {
        return db.query("delete from lists where id = ?;", [id], callback);
    };

    static editList(list, callback) {
        return db.query("update lists set title = ? where id = ?", [list.title, list.id], callback);
    }

};