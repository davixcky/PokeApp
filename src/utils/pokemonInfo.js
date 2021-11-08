export const getPokemonIDFromURL = (url) => {
    const regex = /(?<=pokemon\/)(.*)(?=\/)/g;

    return regex[Symbol.match](url)[0] || '';
};

export const DEFAULT_NAME = 'unknown pokemon';
export const DEFAULT_IMAGE = 'https://cdn.vectorstock.com/i/1000x1000/74/05/pokemon-go-logo-icon-vector-23237405.jpg';

export const getPokemonParsedInfo = (pokemon) => {
    const name = pokemon.forms[0].name || DEFAULT_NAME;
    const mainImage = pokemon.sprites.other.dream_world.front_default || DEFAULT_IMAGE;

    const types = pokemon.types?.map(({type: pokemonType}) => pokemonType.name) || [];
    const abilities = [];
    const hiddenAbilities = [];

    pokemon.abilities?.forEach(({is_hidden, ability: {name}}) => {
        if (is_hidden) {
            hiddenAbilities.push(name);
        } else {
            abilities.push(name);
        }
    });

    return {
        name,
        mainImage,
        types,
        abilities,
        hiddenAbilities,
    }
};
