const express = require('express');
const router = express.Router();
const path = require ('path')
const multer = require('multer');
const authMiddleware = require ('../middlewares/authMiddleware')

const productController = require('../controllers/productController');



// ************ MULTER ************
const upload = require('../middlewares/multerProductsmiddleware');

router.get('/', productController.list);
//router.get('/carrito', authMiddleware,productbd.productCart);
router.get('/detalle-de-producto/:id', productController.detail);

router.get('/categoria/:category_id', productController.categories);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', authMiddleware,productController.edit); 
router.put('/editar-producto/:id', upload.any(), productController.update); 


// // CREATE ONE PRODUCT //
router.get('/crear-producto', authMiddleware,productController.add);
router.post('/crear-producto', upload.any(), productController.create);

// DELETE ONE PRODUCT //
router.delete('/borrar-producto/:id', authMiddleware,productController.destroy);



module.exports = router;