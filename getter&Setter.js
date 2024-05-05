"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this._id = 1;
    }
    Object.defineProperty(User.prototype, "getNameOfUser", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setNameOfUser", {
        set: function (newName) {
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var userA = new User("Anuj", "anuj@anuj.com");
userA.setNameOfUser = "Anuj";
console.log(userA.getNameOfUser);
exports.default = {};
