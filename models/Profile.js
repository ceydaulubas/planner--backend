const { Schema, model, mongoose } = require('mongoose');

const profileSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    toDos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ToDo',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports.Profile = model('Profile', profileSchema);
