import axios from "axios";
import {getPokemonParsedInfo} from "../../utils/pokemonInfo";

class PokemonApiService {
    constructor() {
        this.client = axios.create({
            headers: {
                Accept: "application/json",
            },
        });
    }

    async doGet(url) {
        const {data} = await this.client.get(url);
        console.log(data);
        return data;
    }

    async getPokemonByID(id) {
        const {data} = await this.client.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        return getPokemonParsedInfo(data);
    }
}

export default PokemonApiService;
