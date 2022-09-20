const { Book } = require('../models');

const getAll = async () => {
  const result = await Book.findAll();
  return result;
};

const getById = async (id) => {
  const result = await Book.findByPk(id);
  return result;
}

const create = async (book) => {
  const result = await Book.create(book);
  return result;
}

const update = async (id, book) => {
  const result = await Book.update(book, { where: { id } });
  return result;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};