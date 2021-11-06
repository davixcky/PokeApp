import React from "react";
import {PokemonProvider} from "./context/pokemonContext";
import {Home} from "./components/features";

function App() {
    return (
        <PokemonProvider>
            <Home/>
        </PokemonProvider>
    );
}

export default App;
