import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {isAuth} from '../../authentication/jwt.js';

import {  getIngreso, ingresoDetail, addIngreso} from '../controllers/ingreso.controller.js';

 const IngresosRoutes = express.Router();

 IngresosRoutes.get('/', getIngreso);
 IngresosRoutes.get('/:id', ingresoDetail);
 IngresosRoutes.post('/',addIngreso);  


export { IngresosRoutes };