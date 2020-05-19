const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/soggetti', function (req, res) {
    let soggetti = [];
    soggetti.push({
        'nome': 'Mario',
        'cognome': 'Rossi',
        'indirizzo': 'via roma 1, Jesi(AN)'
    });
    soggetti.push({
        'nome': 'Anna',
        'cognome': 'Verdi',
        'indirizzo': 'via ascoli 2, Apiro(MC)'
    });
    res.send(soggetti);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});