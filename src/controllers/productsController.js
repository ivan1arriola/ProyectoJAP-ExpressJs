// productsController.js
exports.getProduct = (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/products" });
};

exports.getCats = (req, res) => {
    res.sendFile("cat.json", { root:"./data/cats" });
};

exports.getCatsProducts = (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/cats_products" });
};

exports.getProductsComments = (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/products_comments" });
};
