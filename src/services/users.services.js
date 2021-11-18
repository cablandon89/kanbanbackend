// eslint-disable-next-line import/extensions
import Models from '../models/init-models.js';

const { users } = Models();

export default class UserService {
  static async getAll() {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await users.findAll();
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await users.findByPk(id);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async postUser(user) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await users.create(user);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async putUser(id, obj) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await users.update(obj, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
