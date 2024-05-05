"use strict";
// class User {
//   private name: string;
//   public email: string;
//   public readonly city: string = "Jalandhar";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, id) {
        if (id === void 0) { id = ""; }
        this.name = name;
        this.email = email;
        this.id = id;
    }
    return User;
}());
var userA = new User("Anuj", "anuj@anuj.com");
exports.default = {};
