
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const userRoutes = require('./src/routes/user_routes');
const deliveryRoutes = require('./src/routes/delivery_routes');

const app = express();

const corsConfig = {
    origin: ['http://127.0.0.1:3000','http://localhost:3000']
};

mongoose.connect(process.env.MONGODB_URI)
.then( () => console.log("Conectado a la base de datos") )
.catch( error => console.error(error) );

app.use(express.json());
app.use(cors());
// app.use(bodyParser);
app.use('/user',userRoutes);
app.use('/delivery',deliveryRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Server listening on port "+process.env.PORT);
});
