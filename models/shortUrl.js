const { mongo } = require("mongoose");

const shortUrlSchema = new mongoose.Scheme({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('shortUrl', shortUrlSchema)