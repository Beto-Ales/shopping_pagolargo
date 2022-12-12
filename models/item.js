const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },    
    checked: Boolean,
    date:Date,        
})

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Item', itemSchema)