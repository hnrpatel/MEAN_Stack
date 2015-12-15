var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser  = require('body-parser');

var app = express();
var studentsSchema = {
  name: String,
  Id: String,
  webpage: String
};

mongoose.connect('mongodb://localhost/StudentDb');
var students = mongoose.model('students', studentsSchema, 'student');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/student', function (req, res) {
  console.log('Finding student with filter: ', req.query);
  students.find({}, function (err, doc) {
    res.send(doc);
  });
});

app.get('/student/:id', function (req, res) {
  console.log('Finding students with ID: ', req.params.id);
  students.findById(req.params.id, function (err, foundDocument) {
    res.send(foundDocument);
  });
});

app.post('/student', function (req, res) {
  console.log('Creating students: ', req.body);
  new students(req.body).save(function (err, doc) {
    res.send(doc);
  });
});

app.delete('/student/:id', function(req, res){
  console.log('Deleting students with ID: ' + req.params.id);
  students.remove({_id: req.params.id}, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);