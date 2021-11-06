export const getPokemonIDFromURL = (url) => {
    const regex = /(?<=pokemon\/)(.*)(?=\/)/g;

    return regex[Symbol.match](url)[0] || '';
};

