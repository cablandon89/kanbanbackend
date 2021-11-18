// eslint-disable-next-line import/extensions
import Models from '../models/init-models.js';

const { status } = Models();

export default class StatusService {
  static async getAll() {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await status.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await status.findByPk(id);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async postStatus(obj) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await status.create(obj);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async putStatus(id, obj) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await status.update(obj, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteStatus(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await status.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
