import axios from "axios";

export async function catalogService() {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon`
      );
      return data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("Catalog not found");
      } else {
        throw new Error("Error while receiving data: " + error.message);
      }
    }
  }