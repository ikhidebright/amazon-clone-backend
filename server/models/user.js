const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    user: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: 'Address'}
});

module.exports = mongoose.model("User", userSchema);