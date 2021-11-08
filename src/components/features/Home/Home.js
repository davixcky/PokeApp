import React, {useEffect, useState} from "react";
import {usePokemonContext} from "../../../context/pokemonContext";
import styles from './Home.module.css';
import {PokemonSection} from "../../ui";
import {PokemonPreview} from "../../ui/PokemonPreview";
import {PokemonDetails} from "../../ui/PokemonDetails";

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const {pokemonList, searchInPokemonList} = usePokemonContext();
    const [showModal, setShowModal] = useState(false);

    const onSearchPokemonChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onShowDetails = () => {
        setShowModal(true);
    };

    const onCloseDetails = () => {
        setShowModal(false);
    }

    useEffect(() => {
        searchInPokemonList(searchInput);
    }, [searchInput]);

    return (
        <div className={styles.container}>
            <input onInput={onSearchPokemonChange}/>
            <PokemonSection data={pokemonList}/>
            <PokemonPreview onShowDetails={onShowDetails}/>
            { showModal && <PokemonDetails onClose={onCloseDetails}/>}
        </div>
    );
}

export default Home;
