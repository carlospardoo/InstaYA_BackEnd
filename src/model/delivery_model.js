const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Usuario no definido"]
    },
    pickup_date:{
        type: Date,
        required: [true, "Seleccione la fecha de recogida"]
    },
    pickup_time:{
        type: String,
        required: [true, "Seleccione la hora de recogida"]
    },
    pickup_city:{
        type: String,
        required: [true, "Escriba la ciudad de recogida"]
    },
    pickup_address:{
        type: String,
        required: [true, "Dirección de recogida es requerida"]
    },
    box_width:{
        type: Number,
        required: [true, "Escriba el ancho"],
        min: [0.1, "Ancho debe ser mayor a cero"]
    },
    box_height:{
        type: Number,
        required: [true, "Escriba el alto"],
        min: [0.1, "Alto debe ser mayor a cero"]
    },
    box_depth:{
        type: Number,
        required: [true, "Escriba el largo"],
        min: [0.1, "Largo debe ser mayor a cero"]
    },
    delivery_city:{
        type: String,
        required: [true, "Escriba la ciudad de entrega"]
    },
    delivery_address:{
        type: String,
        required: [true, "Escriba la dirección de entrega"]
    },
    adressee_document:{
        type: String,
        required: [true, "Escriba el documento del destinatario"]
    },
    addessee_name:{
        type: String,
        required: [true, "Escriba el nombre del destinatario"]
    },
    state:{
        type: String,
        required: true,
        enum: ["Guardado", "Cancelado", "Cumplido"],
        default: "Guardado" 
    }
}, {timestamps: true});

module.exports = mongoose.model('entrega', deliverySchema);
