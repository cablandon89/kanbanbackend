import UserService from "../services/users.services.js";


export const homeCtrl = async (req, res, next) => {
  try {
    res.json('Bienvenido a la aplicación de kanban');
  } catch (error) {
    next(error);
  }
};


export const getUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    let {id} = req.params;
    id = Number(id);
    const user = await UserService.getById(id);
    res.json(user);

  } catch (err) {
    next(err);
  }
}

export const postUser = async (req, res, next) => {
  try {
    // Obtenemos los datos que nos envia el cliente a través del body
    const body = req.body;
    
    
    // Mandamos a llamar al servicio para insertar el usuario
    const user = await UserService.postUser(body);
    // Enviamos una respuesta 201 con el registro que acabamos de agregar a la DB
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);
    const user = await UserService.update(id, req.body);
    if (user[0] === 1) {
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

export const deleteUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);
    const result = await UserService.delete(id);
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