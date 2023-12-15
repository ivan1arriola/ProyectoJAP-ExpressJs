// cartController.js
exports.getUserCart = (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/user_cart" });
};

exports.getCart = (req, res) => {
    res.sendFile("buy.json", { root:"./data/cart" });
};
