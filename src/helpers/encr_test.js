bcrypt = require('bcryptjs');

// const hashed = bcrypt.hash("123", 10);

// setTimeout(()=> console.log(hashed), 5000);
// console.log(hashed);

const validate = bcrypt.compareSync("1234", "$2a$10$v8FPI66fnRlAEhd6h5dw0.o5z8ECfPzkMr.enePi6Wx8nAnlgGs/S");

console.log(validate)
