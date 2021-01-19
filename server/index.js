const express = require('express');

const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { getAll } = require('../database/index.js');
const { updateReview } = require('../database/index.js');

app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  getAll(id, (err, results) => {
    if (err) {
      res.status(400).end();
    }
    res.status(200).send(results);
  });
});

app.put('/api/reviews/:id/helpful', (req, res) => {
  const { id } = req.params;
  const value = 'helpful';
  updateReview(value, id, (err, results) => {
    if (err) {
      res.status(400).end();
    }
    res.status(200).send(results);
  });
});

app.put('/api/reviews/:id/unhelpful', (req, res) => {
  const { id } = req.params;
  const { review } = req.params;
  console.log(id);
  console.log('review:', review);
  const value = 'unhelpful';
  updateReview(value, id, review, (err, results) => {
    if (err) {
      res.status(400).end();
    }
    res.status(200).send(results);
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
