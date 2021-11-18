// eslint-disable-next-line import/extensions
import StatusService from '../services/status.services.js';

export const getStatus = async (req, res, next) => {
  try {
    const status = await StatusService.getAll();
    res.json(status);
  } catch (err) {
    next(err);
  }
};

export const getStatusById = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = Number(id);
    const user = await StatusService.getById(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const postStatus = async (req, res, next) => {
  try {
    // Obtenemos los datos que nos envia el cliente a través del body
    const { body } = req;

    // Mandamos a llamar al servicio para insertar el usuario
    const status = await StatusService.postStatus(body);
    // Enviamos una respuesta 201 con el registro que acabamos de agregar a la DB
    res.status(201).json(status);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
export const updateStatus = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = Number(id);
    const status = await StatusService.putStatus(id, req.body);
    if (status[0] === 1) {
      return res.json({
        message: 'Se ha actualizado el registro en el sistema',
      });
    }
    return res.status(400).json({
      message: 'Hubo un problema al actualizar el registro',
    });
  } catch (error) {
    next(error);
  }
};

// eslint-disable-next-line consistent-return
export const deleteStatus = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);
    const result = await StatusService.deleteStatus(id);
    if (result === 1) {
      return res.json({
        message: 'Se ha eliminado el registro en el sistema',
      });
    }
    return res.status(400).json({
      message: 'Hubo un problema al eliminar el registro',
    });
  } catch (error) {
    next(error);
  }
};
