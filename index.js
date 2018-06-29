'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
// const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');
const { peek, display, Queue} = require('./queue');

const cats = require('./catQueue');
const dogs = require('./dogQueue');


const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

//Get Cats
app.get('/api/cat', (req, res) => {
  console.log('getting cats')
  res.json(peek(cats));
});

//Get Dogs
app.get('/api/dog', (req, res) => {
  // res.json(dogs[0]);
  res.json(peek(dogs));
});

//Delete Cats
app.delete('/api/cat', (req, res) => {
  console.log('cat deleted')
  cats.dequeue();
  console.log(peek(cats))
  res.sendStatus(204);
})

//Delete Dogs
app.delete('/api/dog', (req, res) => {
  dogs.dequeue();
  res.sendStatus(204);
})

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  // dbConnect();
  runServer();
}

module.exports = { app };
