const express = require('express');
const HTTP_SERVER = express();
const cors = require('cors');

HTTP_SERVER.use(cors());

const port = 5000;
HTTP_SERVER.listen(port, 'localhsot', () => {
  console.log('SERVER STARTED IN THE PORT', port);
});

HTTP_SERVER.use('/', require('./app'));
