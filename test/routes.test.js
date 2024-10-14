const request = require('supertest');
const express = require('express');

const newsRoute = require('../routes/news.route');
const pastRoute = require('../routes/past.route');
const commentsRoute = require('../routes/comments.route');
const askRoute = require('../routes/ask.route');
const showRoute = require('../routes/show.route');
const jobsRoute = require('../routes/jobs.route');
const submitRoute = require('../routes/submit.route');

const createAppWithRoutes = () => {
    const app = express();

    app.use('/news', newsRoute);
    app.use('/past', pastRoute);
    app.use('/comments', commentsRoute);
    app.use('/ask', askRoute);
    app.use('/show', showRoute);
    app.use('/jobs', jobsRoute);
    app.use('/submit', submitRoute);

    return app;
};

describe('Test all routes', () => {
    let app;

    beforeAll(() => {
        app = createAppWithRoutes();  // Use provider
    });

    it('GET /news should return correct response', async () => {
        const res = await request(app).get('/news');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the news route')
    });

    it('GET /past should return correct response', async () => {
        const res = await request(app).get('/past');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the past news route')
    });

    it('GET /comments should return correct response', async () => {
        const res = await request(app).get('/comments');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the comments route')
    });

    it('GET /ask should return correct response', async () => {
        const res = await request(app).get('/ask');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the ask route')
    });

    it('GET /ask/{id} should return correct response', async () => {
        const res = await request(app).get('/ask/123');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the ask route for 123')
    });

    it('GET /show should return correct response', async () => {
        const res = await request(app).get('/show');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the show route')
    });

    it('GET /jobs should return correct response', async () => {
        const res = await request(app).get('/jobs');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the jobs route')
    });

    it('GET /submit should return correct response', async () => {
        const res = await request(app).get('/submit');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('this is the submit route')
    });
});