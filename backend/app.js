const express = require('express'),
      morgan = require('morgan'),
      cors = require('cors'),
      path = require('path'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

require('./models/note');

const app = express();

// Set up connection of database
setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// RESTful api handlers
app.get('/', (req, res) => {
      console.log('3777');
});

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    title     : { type: String },
    text      : { type: String, required: true },
    color     : { type: String },
    createdAt : { type: Date }
});

app.listen(9027, () => {
  console.log(`App listening on port!`);
});

// ==============================

const Note = mongoose.model('Note');

function setUpConnection() {
    mongoose.connect(`mongodb://localhost/`);
}

function listNotes(id) {
    return Note.find();
}

function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

let dataTS = {
  text: '2999',
  title: 'title',
  color: 'red'
};

createNote(dataTS);

listNotes(0);

function deleteNote(id) {
    return Note.findById(id).remove();
}
