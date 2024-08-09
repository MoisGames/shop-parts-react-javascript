const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json({brand})
    }

    async getAll(req, res) {
        const {categoryId} = req.query
        let brands;
        if (!categoryId) {
            brands = await Brand.findAll()
        }
        if (categoryId) {
            brands = await Brand.findAll({where: {categoryId}})
        }
        return res.json(brands)
    }
}

module.exports = new BrandController()