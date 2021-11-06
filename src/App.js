import React, {useEffect, useState} from "react";
import styles from "./App.module.css";
import {PokemonSection} from "./components/ui";
import {usePokemonContext, PokemonProvider} from "./context/pokemonContext";
import {PokemonPreview} from "./components/ui/PokemonPreview";

function App() {
    return (
        <PokemonProvider>
            <Home />
        </PokemonProvider>
    );
}

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const { pokemonList, searchInPokemonList } = usePokemonContext();

    const onSearchPokemonChange = (e) => {
      setSearchInput(e.target.value);
    };

    useEffect(() => {
        searchInPokemonList(searchInput);
    }, [searchInput]);

    return (
        <div className={styles.App}>
            <input onInput={onSearchPokemonChange}/>
            <PokemonSection data={pokemonList}/>
            <PokemonPreview />
        </div>
    );
}

export default App;
