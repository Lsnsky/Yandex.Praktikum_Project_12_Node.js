const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const path = require('path');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', (req, res) => {
    res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});