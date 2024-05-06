function identityOne(num) {
    return num;
}
console.log(identityOne({ brand: "", type: "Adventure" }));
function identityTwo(num) {
    return num;
}
// Arrays with Generics
function getMyArray(arr) {
    return [];
}
function getMyArray2(arr) {
    console.log(arr.length);
    return arr[3];
}
