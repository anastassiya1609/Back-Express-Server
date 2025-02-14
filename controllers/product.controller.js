import { pokemonService } from "../services/pokemonService.js";

export async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const data = await pokemonService(id);
    res.render("product", { data });

 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
