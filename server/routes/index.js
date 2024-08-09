const Router = require('express')
const router = new Router()

const partsRouter = require('./partsRouter')
const categoryRouter = require('./categoryRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter),
router.use('/category', categoryRouter),
router.use('/brand', brandRouter),
router.use('/part', partsRouter),
router.use('/basket', basketRouter),


module.exports = router