const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req,res) => {
    const a = 1;
    const b = 5;
    const sum = a + b;
    res.send(`La somme de ${a} + ${b} est ${sum}`);
});

app.get('/soustraction', (req,res) => {
    const a = 1;
    const b = 5;
    const sous = a - b;
    res.send(`La soustraction de ${a} - ${b} est ${sous}`);
});
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
