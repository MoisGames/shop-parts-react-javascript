const uuid = require('uuid')
const path = require('path')
const {Part} = require('../models/models')
const ApiError = require('../error/ApiError')

class PartsController {
    async create(req, res, next) {
        try {
            const {id, groups, brands,analogue,name_parts,price,semaf,lado,kalinina, brandId, categoryId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const part = await Part.create({id, groups, brands,analogue,name_parts,price,semaf,lado,kalinina, brandId, categoryId, img: fileName})
            return res.json({part})
        } catch (e) {
            console.log('Ошибка при создании новой запчасти');
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, categoryId, limit, page} = req.query
        page = page || 1;
        limit = limit || 12;
        let offset = (page * limit) - limit;
        let parts;
        if(!brandId && !categoryId) {
            parts = await Part.findAndCountAll({limit, offset})
        } if (brandId && !categoryId) {
            parts = await Part.findAndCountAll({where:{ brandId}, limit, offset})

        } if (!brandId && categoryId) {
            parts = await Part.findAndCountAll({where: {categoryId}, limit, offset})

        } if (brandId && categoryId) {
            parts = await Part.findAndCountAll({where: {categoryId, brandId}, limit, offset})

        }
        return res.json(parts)
    }

    async getOne(req, res) {
        
    }
}

module.exports = new PartsController()