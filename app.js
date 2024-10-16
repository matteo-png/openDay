const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req,res) => {
    const a = 1;
    const b = 2;
    const sum = a + b;
    res.send(`La somme de ${a} + ${b} est ${sum}`);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
