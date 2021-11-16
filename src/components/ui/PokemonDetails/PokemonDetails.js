import React from "react";
import styles from './PokemonDetails.module.css';
import PropTypes from "prop-types";
import {Modal} from "../Modal";
import {usePokemonContext} from "../../../context/pokemonContext";

const PokemonDetails = ({onClose}) => {

    const {currentPokemon, onCaptureCurrentPokemon} = usePokemonContext();

    return (
        <Modal onClose={onClose}>
            <h1> {currentPokemon.name} </h1>
            <img src={currentPokemon.mainImage} alt={currentPokemon.name} width={200} height={200}/>
            <div className={styles.abilities}>
                <h2>Abilities</h2>
                <ul>
                    {
                        currentPokemon.abilities.map((ability) => {
                            return (
                                <li key={`ability-${ability}`}>
                                    <p> {ability}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className={styles.abilities}>
                <h2>Hidden abilities</h2>
                <ul>
                    {
                        currentPokemon.hiddenAbilities.map((ability) => {
                            return (
                                <li key={`hidden-ability-${ability}`}>
                                    <p> {ability}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <button onClick={onCaptureCurrentPokemon}>catch</button>
        </Modal>
    );
};

PokemonDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default PokemonDetails;
