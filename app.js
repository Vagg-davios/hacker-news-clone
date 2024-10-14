const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Index - TODO::Reroute to /news</h1>');
});

app.use('/news', require('./routes/news.route'));
app.use('/past', require('./routes/past.route'));
app.use('/comments', require('./routes/comments.route'));
app.use('/ask', require('./routes/ask.route'));
app.use('/show', require('./routes/show.route'));
app.use('/jobs', require('./routes/jobs.route'));
app.use('/submit', require('./routes/submit.route'));



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});