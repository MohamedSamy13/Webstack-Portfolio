const Note = require('../models/Note');

// Create new note
exports.createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newNote = new Note({
            title,
            content,
            user: req.user.id,
        });

        const note = await newNote.save();
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all notes for a user
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
