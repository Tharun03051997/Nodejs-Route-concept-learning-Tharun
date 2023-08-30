const TodosRouter = require('express').Router();

TodosRouter.get('/tharun/:id', (request, response, next) => {
  console.log('REQUEST HIT');
  const { id } = request.params;
  const data = require('../mocks/todos.json');
  const filtereddata = data.filter((item) => Number(item.id) === Number(id));
  return response.status(200).json({
    message: filtereddata,
    length: data.length,
  });
});

module.exports = TodosRouter;
