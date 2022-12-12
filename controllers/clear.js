const clearRouter = require('express').Router()
const { request, response } = require('express')
const Item = require('../models/item')

clearRouter.delete('/', (request, response, next) => {
    Item.deleteMany({
        "checked": true
    })
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = clearRouter