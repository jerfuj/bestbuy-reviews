const express = require('express');
// const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

const { getAll } = require('../database/index.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products/:id', express.static(`${__dirname}/../client/dist`));
app.use('/bundle', express.static(`${__dirname}/../client/dist/bundle.js`));

// app.get('/api', (req, res) => {
//   res.redirect('/api/reviews/1');
// });

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  getAll(id, (err, results) => {
    if (err) {
      res.status(400).end(`Error finding product reviews for product id: ${id}`);
    }
    res.status(200).send(results);
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
