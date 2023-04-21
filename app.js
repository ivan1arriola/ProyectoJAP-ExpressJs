const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Devuelve JSON la informacion de la api y las rutas
app.get("/", (req, res) => {
   res.json({
         "api": "ProyectoJAP",
            "version": "1.0.0",
            "routes": [
                {
                    "route": "/",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion de la api y las rutas"
                },
                {
                    "route": "/cart",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion del carrito"
                },
                {
                    "route": "/products/:id",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion del producto"
                },
                {
                    "route": "/cats",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion de las categorias"
                },
                {
                    "route": "/cats_products/:id",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion de los productos de una categoria"
                },
                {
                    "route": "/products_comments/:id",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion de los comentarios de un producto"
                },
                {
                    "route": "/sell",
                    "method": "GET",
                    "description": "Devuelve JSON con mensaje de publicacion exitosa"
                },
                {
                    "route": "/user_cart/:id",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion del carrito de un usuario"
                },
                {
                    "route": "/user",
                    "method": "GET",
                    "description": "Devuelve JSON la informacion del usuario"
                }
            ]
        }
    );
    
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
    res.sendFile("publish.json", { root:"./data/sell" });
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