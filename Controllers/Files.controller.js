const FilesRouter = require('express').Router();
const fs = require('fs');

function filecreate(data = null) {
  try {
    const content = new Date().toString();
    fs.writeFileSync('./files/test.txt', data ? data : content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

FilesRouter.get('/createFile', (request, response, next) => {
  console.log('REQUEST HIT');
  filecreate();
  return response.status(200).json({
    message: 'Request Hit',
  });
});

FilesRouter.get('/createCustomFile/:content', (request, response, next) => {
  const { content } = request.params;
  console.log('REQUEST HIT');
  filecreate(content);
  return response.status(200).json({
    message: 'Request Hit',
  });
});

module.exports = FilesRouter;
