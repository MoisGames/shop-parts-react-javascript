const Router = require('express')
const router = new Router()
const PartsController = require('../controllers/partsController')

router.post('/', PartsController.create)
router.get('/', PartsController.getAll)
router.get('/:id', PartsController.getOne)


module.exports = router