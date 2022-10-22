const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    importancy: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.ToDo = model('ToDo', taskSchema);
