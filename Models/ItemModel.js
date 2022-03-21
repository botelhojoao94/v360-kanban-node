const db = require('../Database/dbConection')

module.exports = class ItemModel {

    static getAllItems(callback) {
        return db.query(`select * from items`, callback)
    };

    static addItem(item, callback) {
        return db.query("insert into items (title, description, list_id, color) values (?, ?, ?, ?)", [item.title, item.description, item.list_id, item.color], callback);
    };

    static delItem(id, callback) {
        return db.query("delete from items where id = ?;", [id], callback);
    };

    static editItem(item, callback) {
        if (item.title)
            return db.query("update items set title = ?  where id = ?", [item.title, item.id], callback);
        else if (item.description)
            return db.query("update items set description = ? where id = ?", [item.description, item.id], callback);
        else if (item.list_id)
            return db.query("update items set list_id = ? where id = ?", [item.list_id, item.id], callback);
        else if (item.color)
            return db.query("update items set color = ? where id = ?", [item.color, item.id], callback);
    }

    static delItemFromList(id, callback) {
        return db.query("delete from items where list_id = ?;", [id], callback);
    };

};