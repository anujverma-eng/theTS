"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var answer = addTwo(2);
function signUp(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "Name is: ".concat(name, ", Email is: ").concat(email, " & IsPaid is: ").concat(isPaid);
}
var user = signUp("Anuj", "anuj@codestudio.com");
