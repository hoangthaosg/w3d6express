const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/submit', (req, res, next) => {
    console.log('number 1', req.query.num1,'opt', req.query.opt,'number 2', req.query.num2);
    let rs = 0;
    const num1 = Number.parseInt(req.query.num1, 10);
    const num2 = Number.parseInt(req.query.num2, 10);
    switch (req.query.opt) {
        case 'add':
            rs = num1 + num2;
            break;
        case 'sub':
            rs = num1 - num2;
            break;
        case 'time':
            rs = num1 * num2;
            break;
        case 'div':
            rs = num1 / num2;
            break;
        default:
            rs = 0;
    }
    res.send(`<h1>The Answer is: ${rs}</h1><a href="/">Another calculation!</a>`);
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})