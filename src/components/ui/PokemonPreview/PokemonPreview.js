import React, {useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./PokemonPreview.module.css";
import {Card} from "../Card";
import {usePokemonContext} from "../../../context/pokemonContext";

const PokemonPreview = () => {
    const {currentPokemon} = usePokemonContext();

    useEffect(() => {
        console.log(currentPokemon);
    }, [currentPokemon]);

    if (!currentPokemon) {
        return (
            <Card>
                <h2>There is not a selected pokemon</h2>
            </Card>
        )
    }

    const getImageUrl = () => {
        return currentPokemon.sprites.other.dream_world.front_default || 'https://cdn.vectorstock.com/i/1000x1000/74/05/pokemon-go-logo-icon-vector-23237405.jpg';
    };

    const onCatch = () => {
        console.log('catch pokemon');
    };

    const onShowDetails = () => {
        console.log('show pokemon details');
    };

    return (
        <Card>
            <h2>{currentPokemon.forms[0].name || 'name not found'}</h2>
            <img src={getImageUrl()} alt={currentPokemon.forms[0].name || 'name not found'}/>
            <button onClick={onCatch}>catch</button>
            <button onClick={onShowDetails}>details</button>
        </Card>
    );
};

PokemonPreview.propTypes = {};

export default PokemonPreview;
