const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

module.exports = [
    {
        pathname: '/users',
        method: 'GET',
        handler: UserController.listUsers
    },
    {
        pathname: '/products',
        method: 'GET',
        handler: ProductController.listProducts
    }
]