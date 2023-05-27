import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {isAuth} from '../../authentication/jwt.js';

import {  getGastos, gastosDetail, addGasto, deleteGasto} from '../controllers/gasto.controller.js';

 const GastoRoutes = express.Router();

  GastoRoutes.get('/', getGastos);
  GastoRoutes.get('/:id', gastosDetail);
  GastoRoutes.post('/',addGasto);  
  GastoRoutes.delete('/delete/:id',deleteGasto);


export { GastoRoutes };