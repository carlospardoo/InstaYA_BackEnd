const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Usuario requerido"],
        unique: true
    },
    name:{
        type: String,
        required: [true, "Nombre requerido"]
    },
    email:{
        type: String,
        required: [true, "Email requerido"]
    },
    password:{
        type: String,
        required: [true, "Contraseña requerida"]
    },
    state:{
        type: Boolean,
        default: 1
    }
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema);
