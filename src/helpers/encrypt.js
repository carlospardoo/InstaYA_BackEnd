const bcrypt = require('bcryptjs');

async function encrypt(text){

    const ROUNDS = 10;

    const hashed = await bcrypt.hash(text, ROUNDS);

    return hashed;

};

const validate = (text, hash) =>{
    return bcrypt.compareSync(text, hash);
};


module.exports = {encrypt, validate};

