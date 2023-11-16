const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});
BookSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = mongoose.model("Book", BookSchema, "Book");
