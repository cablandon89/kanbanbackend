import { Router } from 'express';
import {
  getStatus,
  getStatusById,
  postStatus,
  updateStatus,
  deleteStatus,
} from '../controllers/status.controller';

const routes = Router();

// Obtener todos los usuarios
routes.get('/status', getStatus);
// Obtener un usuario por su id
routes.get('/status/:id', getStatusById);
// Insertar un usuario
routes.post('/status', postStatus);
// Actualizar un usuario
routes.put('/status/:id', updateStatus);
// Borrar un usuario
routes.delete('/status/:id', deleteStatus);

export default routes;
