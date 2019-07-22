const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

//Get
app.get('/', (req, res) => {
  db.read(function(err, results) {
    if (err) {
      console.log("Can not GET X");
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

//POST
// app.post('/create', (req, res) => {
//   let {param1, param2} = req.body;
//   db.create(param1, param2, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.status(201).json(results);
//     }
//   });
// });

//PUT
// app.put('/update', (req, res) => {
//   const {param1, param2} = req.body;
//   db.update(param1, param2, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

//DELETE
// app.delete('/delete', (req, res) => {
//   const {param1, param2} = req.body;
//   db.delete(param1, param2, (err, results) => {
//     if(err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

