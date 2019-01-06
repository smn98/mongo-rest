const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data ={
    id:10
}

let token = jwt.sign(data,'hello123');
let decoded = jwt.verify(token,'hello123');
console.log(decoded);
// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'password1').toString(),
// }

// if (SHA256(JSON.stringify(data) + 'password1').toString() === token.hash) {
//     console.log("ok");
// } else {
//     console.log("not ok");
// }