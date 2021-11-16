import React from "react";
import PropTypes from "prop-types";
import styles from "./PokemonPreview.module.css";
import {Card} from "../Card";
import {usePokemonContext} from "../../../context/pokemonContext";
import {Button} from "../Button";

const PokemonPreview = ({onShowDetails, children}) => {
    const {currentPokemon, onCaptureCurrentPokemon} = usePokemonContext();

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
                    {children}
                </div>
            </div>
        </Card>
    );
};

PokemonPreview.propTypes = {
    onShowDetails: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default PokemonPreview;
