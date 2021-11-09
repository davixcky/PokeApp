import React, {useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./PokemonPreview.module.css";
import {Card} from "../Card";
import {usePokemonContext} from "../../../context/pokemonContext";
import {Button} from "../Button";

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
            <div className={styles.header}>
                <h2>{currentPokemon.name}</h2>
            </div>
            <div className={styles.content}>
                <img src={currentPokemon.mainImage} alt={currentPokemon.name}/>
                <div className={styles.buttons}>
                    <Button src='/images/Catch.png' alt={currentPokemon.name}
                            onClick={onCaptureCurrentPokemon} text='Catch'/>
                    <Button src='/images/Details.png' alt={currentPokemon.name}
                            onClick={onShowDetails} text='Details'/>

                </div>
            </div>
        </Card>
    );
};

PokemonPreview.propTypes = {
    onShowDetails: PropTypes.func,
};

export default PokemonPreview;
