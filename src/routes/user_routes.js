const express = require('express');
const userSchema = require('../model/user_model');
const encrypt = require('../helpers/encrypt');

const router = express.Router();

router.get('/get_all_users',(req, res) =>{

    userSchema
    .find()
    .then(data => res.json(data))
    .catch(error => res.json(error));

});

router.post('/login', async (req, res) =>{
    // console.log(req);

    const parameters = req.body;
    
    const username = parameters.username;
    const password = parameters.password;
    console.log("get_user request: [ username="+username+", password="+password+" ]");

    // const encrypResult = await encrypt.encrypt(password);
    // // console.log(encrypResult);
    // // res.json({encrypt:encrypResult, password:password});

    // // const validatePassword = encrypResult[0];
    // // const passwordHash = encrypResult[1];

    // if(encrypResult == null || encrypResult == undefined || encrypResult == ''){
    //     res.json("Error al validar usuario. Vuelva a loguearse");
    //     return;
    // }

    userSchema
    .find({username: username})
    .exec()
    .then(data => {
        const validator = encrypt.validate(password, data[0].password);
        if(validator){
            res.json({message: "Login exitoso"});
        }
        else{
            res.status(401);
            res.json({message: "Usuario o contraseña incorrectos"});
        }
    }) 
    .catch(error => res.json({message: error}));

});

router.post('/register_user', async (req, res) =>{
    const encrypResult = await encrypt.encrypt(req.body.password);
    const dataMapper = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: encrypResult
    };
    userSchema(dataMapper)
    .save()
    .then(data => res.json(data))
    .catch(error => res.json(error));
});

module.exports = router;
