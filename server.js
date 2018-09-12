const express = require('express');
const bodyParser = require('body-parser')
require('./server/startdatabase');
const app = express();
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const productRouter = require('./server/routes/product');

app.use('/api/product', productRouter);

const serverPort = process.env.PORT || 3001;

app.listen(serverPort, () => {
  console.log(`Server is listening at port ${serverPort}`);
});
