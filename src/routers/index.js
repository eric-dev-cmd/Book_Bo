const booksRouter = require('./bookRouter');

function route(app) {
    app.use('/api', booksRouter);
}

module.exports = route;