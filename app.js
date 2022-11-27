const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// cart routes
app.get('/cart', (req, res) => {
    res.sendFile("buy.json", { root:"./data/cart" });
});

// products routes
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/products" });
});

// cats routes
app.get('/cats', (req, res) => {
    res.sendFile("cat.json", { root:"./data/cats" });
});

// cats_products routes
app.get('/cats_products/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/cats_products" });
});

// procucts_comments routes
app.get('/products_comments/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/products_comments" });
});

// sell routes
app.get('/sell', (req, res) => {
    res.sendFile("sell.json", { root:"./data/sell" });
});

// user_cart routes
app.get('/user_cart/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(`${id}.json`, { root:"./data/user_cart" });
});

// user routes
app.get('/user', (req, res) => {
    res.send('user')
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});