const { default: mongoose } = require("mongoose");


const UserSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    about: {
        type: String,
        require: true,
    },
    profileURL: String,

})

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = { User }
