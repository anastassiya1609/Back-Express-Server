import { catalogService } from "../services/catalogServise.js";

export async function getProducts(req, res) {
    try {
      const data = await catalogService(); 
      res.render("products", {data : data.results})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }