import React, {useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./PokemonPreview.module.css";
import {Card} from "../Card";
import {usePokemonContext} from "../../../context/pokemonContext";

const PokemonPreview = ({onShowDetails}) => {
    const {currentPokemon, capturedPokemon, onCaptureCurrentPokemon} = usePokemonContext();

    useEffect(() => {
        console.log(currentPokemon);
    }, [currentPokemon]);

    useEffect(() => {
        console.log(capturedPokemon);
    }, [capturedPokemon]);

    if (!currentPokemon) {
        return (
            <Card>
                <h2>There is not a selected pokemon</h2>
            </Card>
        )
    }

    return (
        <Card>
            <h2>{currentPokemon.name}</h2>
            <img src={currentPokemon.mainImage} alt={currentPokemon.name}/>
            <button onClick={onCaptureCurrentPokemon}>catch</button>
            <button onClick={onShowDetails}>details</button>
        </Card>
    );
};

PokemonPreview.propTypes = {
    onShowDetails: PropTypes.func,
};

export default PokemonPreview;
