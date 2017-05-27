"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var userList = new mongoose.Schema({
    name: String,
    group: String,
    phone: String,
    pincode: String,
    country: String,
    state: String,
    city: String,
    village: String,
    email: String
});
var UserList = mongoose.model('UssrList', userList);
exports.default = UserList;
//# sourceMappingURL=userList.js.map