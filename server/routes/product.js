const router = require('express').Router()
const Product = require('../models/product')
const upload = require('../middlewares/upload-photo')

// create a product

router.post('/products', upload.single('photo'), async (req, res) => {
    try {
        let product = new Product()
        product.title = req.body.title
        product.description = req.body.description
        product.photo = req.body.photo
        product.price = req.body.price
        product.stockQuantity = req.body.stockQuantity

        await product.save()

        res.json({
            message: true,
            message: "Succesfully Saved"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})


module.exports = router;