import React, {useEffect, useState} from "react";
import {usePokemonContext} from "../../../context/pokemonContext";
import styles from './Home.module.css';
import {PokemonSection} from "../../ui";
import {PokemonPreview} from "../../ui/PokemonPreview";
import {PokemonDetails} from "../../ui/PokemonDetails";
import {useNavigate} from "react-router-dom";
import {Button} from "../../ui/Button";

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const {pokemonList, searchInPokemonList, onCaptureCurrentPokemon} = usePokemonContext();
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

    const onGoToFavorites = () => {
        navigate('/captures');
    };

    useEffect(() => {
        searchInPokemonList(searchInput);
    }, [searchInput]);

    return (
        <div className={styles.container}>
            <div className={styles.mainBar}>
                <div className={styles.searchBar}>
                    <input onInput={onSearchPokemonChange} className={styles.inputBar}/>
                    <button><img src="/images/Search.png" alt="Search" className={styles.searchIcon}/></button>
                </div>
                <div className={styles.mainBar__favorites}>
                    <button onClick={onGoToFavorites}><img src="/images/Home.png" alt="Favorites"/></button>
                </div>
            </div>
            <div className={styles.pokemonContainer}>
                <PokemonSection data={pokemonList}/>
                <PokemonPreview onShowDetails={onShowDetails}>
                    <Button src='/images/Catch.png' alt='pokemon catch'
                            onClick={onCaptureCurrentPokemon} text='Catch'/>
                    <Button src='/images/Details.png' alt='pokemon details'
                            onClick={onShowDetails} text='Details'/>
                </PokemonPreview>
                {showModal && <PokemonDetails onClose={onCloseDetails}/>}
            </div>
        </div>
    );
}

export default Home;
