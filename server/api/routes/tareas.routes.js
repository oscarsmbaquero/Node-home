import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {isAuth} from '../../authentication/jwt.js';

import { getTareas, addTarea } from '../controllers/tarea.controller.js';

 const TareasRoutes = express.Router();

 TareasRoutes.get('/', getTareas);
 TareasRoutes.post('/',addTarea);  


export { TareasRoutes };