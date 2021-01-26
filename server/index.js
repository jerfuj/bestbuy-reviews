const express = require('express');

const app = express();
const port = 3000;

const { getAll } = require('../database/index.js');
// const { updateReview } = require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/reviews/:id', (req, res) => {
  console.log('in the express server get');
  const { id } = req.params;
  console.log('id is: ', id);
  getAll(id, (err, results) => {
    if (err) {
      console.log('erroring in express');
      res.status(400).end();
    }
    console.log('success in express');
    console.log('results:');
    console.log(results);
    res.status(200).send(results);
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
