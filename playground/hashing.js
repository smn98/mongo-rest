const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

let hashedPassword = '$2a$10$UI8G.Qcwe/qYjdJB9fVUBe2Ipguf3setT1365F19ZIj6HIzEFL0Zq';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

// let data ={
//     id:10
// }

// let token = jwt.sign(data,'hello123');
// let decoded = jwt.verify(token,'hello123');
// console.log(decoded);
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