import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json({message: "Hello world with Typescript"});
})

app.listen('3333');