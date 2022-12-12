const listRouter = require('express').Router()
const { request, response } = require('express')
const Item = require('../models/item')

listRouter.get('/', (request, response) => {
    Item
    .find({})
    .then(list => {
        response.json(list)
    })
})

listRouter.post('/', (request, response, next) => {

    const body = request.body    

    const item = new Item({
        name: body.name,        
        checked: false,
        date: new Date(),
    })

    item.save()
        .then(savedItem => {
            response.json(savedItem)
        })
        .catch(error => next(error))

})

listRouter.put('/:id', (request, response, next) => {

    const body = request.body

    const item = {
        name: body.name,        
        checked: body.checked || false,
    }

    Item.findByIdAndUpdate(request.params.id, item, {new: true})
        .then(updatedItem => {
            response.json(updatedItem)
        })
        .catch(error => next(error))
})

listRouter.delete('/:id', (request, response, next) => {

    Item.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))

})

module.exports = listRouter