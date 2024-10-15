const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static('static'));

const routes = [
    { path: '/newest', route: require('./routes/newest.route'), name: 'new' },
    { path: '/past', route: require('./routes/past.route'), name: 'past' },
    { path: '/comments', route: require('./routes/comments.route'), name: 'comments' },
    { path: '/ask', route: require('./routes/ask.route'), name: 'ask' },
    { path: '/show', route: require('./routes/show.route'), name: 'show' },
    { path: '/jobs', route: require('./routes/jobs.route'), name: 'jobs' },
    { path: '/submit', route: require('./routes/submit.route'), name: 'submit' }
];

app.use((req, res, next) => {
    res.locals.routes = routes;
    next();
});

app.use('/', require('./routes/index.route'));

routes.forEach(({ path, route }) => {
    app.use(path, route);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});