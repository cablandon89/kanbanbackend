import {Router} from 'express';
import { getUsers, getUserById, homeCtrl, postUser, updateUser, deleteUser } from '../controllers/users.controller.js';

const routes = Router();

routes.get('/', homeCtrl);
// Obtener todos los usuarios
routes.get('/users', getUsers);
// Obtener un usuario por su id
routes.get('/users/:id', getUserById);
// Insertar un usuario
routes.post('/users', postUser);
routes.post('/users', postUser);
// Actualizar un usuario
routes.put('/users/:id', updateUser);
// Borrar un usuario
routes.delete('/users/:id', deleteUser);

export default routes;