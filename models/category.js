const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Category = mongoose.model('Category', {
    title: String,
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
});

module.exports = { Category };