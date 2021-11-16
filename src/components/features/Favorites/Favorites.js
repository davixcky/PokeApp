import React, {useEffect, useState} from "react";
import {usePokemonContext} from "../../../context/pokemonContext";
import styles from './Favorites.module.css';
import {PokemonSection} from "../../ui";
import {PokemonPreview} from "../../ui/PokemonPreview";
import {PokemonDetails} from "../../ui/PokemonDetails";
import {useNavigate} from "react-router-dom";

const Favorites = () => {
    const [searchInput, setSearchInput] = useState('');
    const {searchInPokemonList, capturedPokemon } = usePokemonContext();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const onSearchPokemonChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onShowDetails = () => {
        setShowModal(true);
    };

    const onCloseDetails = () => {
        setShowModal(false);
    };

    const onGoToHome = () => {
        navigate('/');
    };

    useEffect(() => {
        searchInPokemonList(searchInput);
    }, [searchInput]);

    return (
        <div className={styles.container}>
            <div className={styles.mainBar}>
                <div className={styles.searchBar}>
                    <input onInput={onSearchPokemonChange} className={styles.inputBar}/>
                    <button><img src="/images/Search.png" alt="search" className={styles.searchIcon}/></button>
                </div>
                <div className={styles.mainBar__favorites}>
                    <button onClick={onGoToHome}><img src="/images/Home.png" alt="home"/></button>
                </div>
            </div>
            <div className={styles.pokemonContainer}>
                <PokemonSection data={capturedPokemon}/>
                <PokemonPreview onShowDetails={onShowDetails}/>
                { showModal && <PokemonDetails onClose={onCloseDetails}/>}
            </div>
        </div>
    );
}

export default Favorites;
