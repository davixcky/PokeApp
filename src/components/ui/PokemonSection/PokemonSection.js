import React from "react";
import PropTypes from "prop-types";
import styles from "./PokemonSection.module.css";
import {Card} from "../Card";
import {PokemonItem} from "../PokemonItem";
import {getPokemonIDFromURL} from "../../../utils/pokemonInfo";
import {usePokemonContext} from "../../../context/pokemonContext";

const PokemonSection = ({data}) => {
    const { setCurrentPokemonID } = usePokemonContext();

    const onPokemonClick = async (pokemonID) => {
        await setCurrentPokemonID(pokemonID);
    };

    const getPokemon = ({name, url}) => {
        const pokemonID = getPokemonIDFromURL(url);

        return (
            <li key={pokemonID}>
                <PokemonItem pokemonID={pokemonID} name={name} onClick={onPokemonClick}/>
            </li>
        );
    };

    return (
        <Card>
            <div className={styles.searchResults}>
                <ul className={styles.pokemonList}>
                    {
                        data.map(getPokemon)
                    }
                </ul>
            </div>
        </Card>
    );
};

PokemonSection.propTypes = {
    data: PropTypes.array.isRequired,
};

export default PokemonSection;
