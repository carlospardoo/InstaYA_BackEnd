const express = require('express');
const deliverySchema = require('../model/delivery_model');

const router = express.Router();

router.post('/add_delivery', (req, res) =>{
    const deliverMapping = {
        id_user: req.body.id,
        pickup_date: req.body.fechaRecogida,
        pickup_time: req.body.horaRecogida,
        pickup_city: req.body.ciudadRecogida,
        pickup_address: req.body.direccionRecogida,
        box_width: req.body.ancho,
        box_height: req.body.alto,
        box_depth: req.body.largo,
        delivery_city: req.body.ciudadEntrega,
        delivery_address: req.body.direccionEntrega,
        adressee_document: req.body.identificacionDestinatario,
        addessee_name: req.body.nombreDestinatario
    };

    const newDelivery = deliverySchema(deliverMapping);

    newDelivery
    .save()
    .then(data => res.json({message: "Entrega creada exitosamente. "+data }))
    .catch(err => {
        res.json({message: "Error al crear la entrega. "+err});
    });
});

router.put('/update_delivery', (req, res) =>{
    deliverySchema
    .updateOne({_id: req.body.orden_entrega}, 
        {
            pickup_date: req.body.fechaRecogida,
            pickup_time: req.body.horaRecogida,
            pickup_city: req.body.ciudadRecogida,
            pickup_address: req.body.direccionRecogida,
            box_width: req.body.ancho,
            box_height: req.body.alto,
            box_depth: req.body.largo,
            delivery_city: req.body.ciudadEntrega,
            delivery_address: req.body.direccionEntrega,
            adressee_document: req.body.identificacionDestinatario,
            addessee_name: req.body.nombreDestinatario
        }
    )
    .then(data => res.json({message: "Cambios realizados correctamente", result: data}))
    .catch(err => res.json({message: "Error. "+err}));

});

router.get('/get_delivery', (req, res)=>{
    const id = req.query.id;

    deliverySchema
    .find({id_user: id})
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));

});

router.get('/get_delivery_id', (req, res)=>{
    const id = req.query.id;

    deliverySchema
    .findOne({_id: id})
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));

});

module.exports = router;
