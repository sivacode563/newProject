"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_1 = require("./controllers/cat");
var user_1 = require("./controllers/user");
var userList_1 = require("./controllers/userList");
function setRoutes(app) {
    var catCtrl = new cat_1.default();
    var userCtrl = new user_1.default();
    var userListCtrl = new userList_1.default();
    // Cats
    app.route('/api/cats').get(catCtrl.getAll);
    app.route('/api/cats/count').get(catCtrl.count);
    app.route('/api/cat').post(catCtrl.insert);
    app.route('/api/cat/:id').get(catCtrl.get);
    app.route('/api/cat/:id').put(catCtrl.update);
    app.route('/api/cat/:id').delete(catCtrl.delete);
    // Users
    app.route('/api/login').post(userCtrl.login);
    app.route('/api/users').get(userCtrl.getAll);
    app.route('/api/users/count').get(userCtrl.count);
    app.route('/api/user').post(userCtrl.insert);
    app.route('/api/user/:id').get(userCtrl.get);
    app.route('/api/user/:id').put(userCtrl.update);
    app.route('/api/user/:id').delete(userCtrl.delete);
    // User List from database Entries
    app.route('/api/bloodUser').post(userListCtrl.insert);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map