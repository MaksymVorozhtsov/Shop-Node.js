const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('./shop/product-list', {
            prods: products,
            pageTitle: 'All products',
            path: '/products',
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('./shop/index', {
            prods: products,
            pageTitle: 'Shop Index',
            path: '/',
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('./shop/cart', {
        pageTitle: 'User Cart',
        path: '/cart'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('./shop/checkout', {
        pageTitle: 'User Checkout',
        path: '/checkout'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('./shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
}