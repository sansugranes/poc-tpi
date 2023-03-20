const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();
const testRouter = require('./routes/test');

// middlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// GET /, return OK message
app.get('/', (req, res) => {
    res.json({message: 'OK'});
});
// routing for our test endpoint
app.use('/test', testRouter);

// error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message});
    return;
});

// listen on specified host and port
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
});