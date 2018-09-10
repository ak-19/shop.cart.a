const express = require('express');
require('./server/startdatabase');
const app = express();
app.use(express.static('public'));

const productRouter = require('./server/routes/product');

app.use('/api/product', productRouter);

const serverPort = process.env.PORT || 3001;

app.listen(serverPort, () => {
  console.log(`Server is listening at port ${serverPort}`);
});
