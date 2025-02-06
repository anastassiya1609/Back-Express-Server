import express from "express";
import { pokemonService } from "./services/pokemonService.js";

const PORT = 5050;

const app = express();
app.use(express.json());

app.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const data = await pokemonService(name);
    
    res.json({
      title: data.name,
      id: data.id,
      img: {
        default: data.sprites.front_default,
        female: data.sprites.front_female,
        shiny: data.sprites.front_shiny,
        shiny_female: data.sprites.front_shiny_female,
      },
      type: data.types[0].type.name,
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message});

  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
