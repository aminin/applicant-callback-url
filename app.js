import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/callback', function(req, res, next) {
  console.log('GET /callback');
  res.json({message: 'Hello GET'});
});

app.post('/callback', function(req, res, next) {
  console.log('POST /callback');
  console.log('req.body', req.body);
  res.json({message: 'Hello POST'});
});

app.listen(PORT, () => {
  console.log('Server started at port ' + PORT);
});
