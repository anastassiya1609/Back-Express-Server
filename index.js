import express from "express";
import { getProduct } from "./controllers/product.controller.js";
import path from "path";
import { fileURLToPath } from "url";
import { getProducts } from "./controllers/products.controller.js";

const app = express();
const PORT = 5050;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/product", getProducts);

app.get("/product/:id", getProduct);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
