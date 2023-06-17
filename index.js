const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const barangRouter = require('./app/router');

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/', barangRouter);
app.use((req, res, next) => {
 res.status(404);
 res.send({
     status: 'failed',
     message: `Resource ${req.originalUrl} not found`
 });
});

app.listen(process.env.PORT || 3000, () => console.log('Server: http://localhost:3000'));