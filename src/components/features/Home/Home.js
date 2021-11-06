import React, {useEffect, useState} from "react";
import {usePokemonContext} from "../../../context/pokemonContext";
import styles from './Home.module.css';
import {PokemonSection} from "../../ui";
import {PokemonPreview} from "../../ui/PokemonPreview";

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const {pokemonList, searchInPokemonList} = usePokemonContext();

    const onSearchPokemonChange = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        searchInPokemonList(searchInput);
    }, [searchInput]);

    return (
        <div className={styles.container}>
            <input onInput={onSearchPokemonChange}/>
            <PokemonSection data={pokemonList}/>
            <PokemonPreview/>
        </div>
    );
}

export default Home;
