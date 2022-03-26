const { date, string } = require('joi')
const mongoose = require('mongoose')
const slugify = require('slugify')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    sale: {
        type: String,
    },
    salePrice:{
        type: Number,
    },
    weight: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    image: {
        type: String,
        data: Buffer
    },
    backpack: {
        type: String,
    },
    quilts: {
        type: String,
    },
    shelter: {
        type: String,
    }
})

productSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }

    next()

})

module.exports = mongoose.model('Product', productSchema)