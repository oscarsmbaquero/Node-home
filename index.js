

//DEPENDENCIAS
import express from "express";
import  "dotenv/config";
import cors from 'cors';

//FUNCION DE LLAMADA
import { DB_URL, connect } from "./server/config/db.js";

//IMPORTACION DE RUTAS
import { GastoRoutes } from './server/api/routes/gasto.routes.js';
import { IngresosRoutes } from './server/api/routes/ingresos.routes.js';


//creo servidor express
const server = express();
//conectamos a traves de la funcion de mongo
connect();
//variable PORT de env
const PORT = process.env.PORT;


server.set("secretKey", "nodeRestApi"); 


// enviar datos por POST
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors('*'));


//RUTAS
server.use("/gastos", GastoRoutes);
server.use("/ingresos", IngresosRoutes);




server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});
server.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
});



server.listen(PORT, () => {
  //Escucho mi servidor en el puerto indicado
  console.log(`Node server listening on port http://localhost:${PORT}`);
});

// const addListeners = () =>{

//   document.getElementById('allPilots').addEventListener('click', displayPilots);//evento para traer todos los pilotos'
// }


// window.onload = () => {
//   addListeners();
  
// };