const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require('./src/routes');


const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/', routes);

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






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});