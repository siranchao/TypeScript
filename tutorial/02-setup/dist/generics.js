"use strict";
/* Generics */
const score = [];
const names = [];
function identify(val) {
    return val;
}
//generic function
function identity(val) {
    return val;
}
const num = identity(3);
const words = identity("hello");
function getSearchProducts(products) {
    const index = products.length - 1;
    return products[index];
}
//arrow function syntax
const getMoreSearchProducts = (products) => {
    const index = products.length - 1;
    return products[index];
};
function getConnection(val, db) {
    return {
        val,
        db
    };
}
