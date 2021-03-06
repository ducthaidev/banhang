const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const danhMucController = require('../controllers/danhMucController');

const Router = express.Router();

Router.get('/', danhMucController.getAll);

Router.use(verifyToken);

Router.get('/search/:ten', danhMucController.getSearchResult);

Router.post('/', danhMucController.add);

Router.delete('/:ten', danhMucController.deleteOne);

module.exports = Router;
