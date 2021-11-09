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
            <div className={styles.mainBar}>
                <div className={styles.searchBar}>
                    <input onInput={onSearchPokemonChange} className={styles.inputBar}/>
                    <button><img src="/images/Search.png" alt="my image" className={styles.searchIcon}/></button>
                </div>
                <div className={styles.mainBar__favorites}>
                    <button><img src="/images/Home.png" alt="my image"/></button>
                </div>
            </div>
            <div className={styles.pokemonContainer}>
                <PokemonSection data={pokemonList}/>
                <PokemonPreview onShowDetails={onShowDetails}/>
                { showModal && <PokemonDetails onClose={onCloseDetails}/>}
            </div>
        </div>
    );
}

export default Home;
