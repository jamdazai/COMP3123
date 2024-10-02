
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
const empRouter = require('./emp')
const userRouter = require('./users')
const errorHandleMiddleware = require('./errorHandlerMiddleware')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
}

// Apply the middleware to all requests - Application Level Middleware
app.use('/user', loggerMiddleware)
app.use('/user', userRouter);
app.use('/emp', empRouter);

// ERROR END POINT
// http://localhost:5000/error
app.get('/error', (req, res) => {
    throw new Error('This is a forced error');
    res.send('Welcome to Express error handling');
});

// ERROR HANDLING MIDDLEWARE
app.use(errorHandleMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
