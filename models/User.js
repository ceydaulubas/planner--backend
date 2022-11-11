const { Schema, model, mongoose } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // token: {
    //   type: String,
    // },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
      },
    ],
    // profile: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Profile',
    // },
  },
  {
    timestamps: true,
  }
);

module.exports.User = model('User', userSchema);
