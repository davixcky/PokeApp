import React, {useEffect, useState} from "react";
import {usePokemonContext} from "../../../context/pokemonContext";
import styles from './Favorites.module.css';
import {PokemonSection} from "../../ui";
import {PokemonPreview} from "../../ui/PokemonPreview";
import {PokemonDetails} from "../../ui/PokemonDetails";
import {useNavigate} from "react-router-dom";
import {Button} from "../../ui/Button";

const Favorites = () => {
    const [searchInput, setSearchInput] = useState('');
    const {
        searchInPokemonList,
        capturedPokemon,
        onReleaseCurrentPokemon,
        isCurrentCatch,
        onCaptureCurrentPokemon
    } = usePokemonContext();
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
                <PokemonPreview onShowDetails={onShowDetails}>
                    {isCurrentCatch() && <Button src='/images/Release.png' alt='pokemon release'
                                                 onClick={onReleaseCurrentPokemon} text='Release'/>}
                    {!isCurrentCatch() && <Button src='/images/Catch.png' alt='pokemon catch'
                                                  onClick={onCaptureCurrentPokemon} text='Catch'/>}
                    <Button src='/images/Details.png' alt='pokemon details'
                            onClick={onShowDetails} text='Details'/>
                </PokemonPreview>
                {showModal && <PokemonDetails onClose={onCloseDetails}/>}
            </div>
        </div>
    );
}

export default Favorites;
