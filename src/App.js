import React from "react";
import {PokemonProvider} from "./context/pokemonContext";
import {Home} from "./components/features";
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.App}>
            <PokemonProvider>
                <Home/>
            </PokemonProvider>
        </div>
    );
}

export default App;
