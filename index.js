const express = require('express');
const fs = require('node:fs');

const {loggerMiddleware}= require('./middlewares/logger');

const bookRouter = require('./routes/book.routes');

const app = express();
const PORT =8000;



// function customMiddleware(req,res,next){
//     console.log('I am a custom middleware');
//     next();
// }


//Middlewares(Plugins)
app.use(express.json());
app.use(loggerMiddleware);

//Routes
app.use('/books', bookRouter);

app.listen(PORT,() => console.log(`Http server started on port ${PORT}`));