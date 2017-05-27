"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var userList_1 = require("../models/userList");
var base_1 = require("./base");
var UserListCtrl = (function (_super) {
    __extends(UserListCtrl, _super);
    function UserListCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = userList_1.default;
        return _this;
    }
    return UserListCtrl;
}(base_1.default));
exports.default = UserListCtrl;
//# sourceMappingURL=userList.js.map