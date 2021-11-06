import React from "react";
import PropTypes from 'prop-types';
import styles from './PokemonItem.module.css';

const PokemonItem = ({pokemonID, name, style, onClick}) => {
    return (
        <div className={styles.pokemonItem} style={style}>
            <h2 className={styles.pokemonTitle} onClick={() => onClick(pokemonID)}>{name}</h2>
        </div>
    )
};

PokemonItem.propTypes = {
    pokemonID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    styles: PropTypes.object,
    onClick: PropTypes.func,
};

export default PokemonItem;
