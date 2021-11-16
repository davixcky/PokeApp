import {createContext, useContext, useEffect, useState} from 'react';
import pokemonApi from '../../services/pokemonService';
import PropTypes from 'prop-types';

const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
    const [tempPokemonList, setTempPokemonList] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150');
    const [currentPokemon, setCurrentPokemon] = useState(undefined);
    const [capturedPokemon, setCapturedPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // TODO: If data is in localstorage, load from there
            const {results, next} = await pokemonApi.doGet('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150');
            setPokemonList(results);
            setTempPokemonList(results);
            setCurrentUrl(next);
        };

        fetchData();
    }, []);

    const searchInPokemonList = (keyword) => {
        setPokemonList(tempPokemonList);

        const filterList = (list) => {
            return list.filter(({name}) => {
                return name.includes(keyword);
            });
        }

        setPokemonList(filterList);
    };

    const setCurrentPokemonID = async (pokemonID) => {
        const data = await pokemonApi.getPokemonByID(pokemonID);
        setCurrentPokemon(data);
    };

    const onCaptureCurrentPokemon = () => {
        setCapturedPokemon(prev => {
            if (prev.includes(currentPokemon)) return prev;

            const { name, id } = currentPokemon;
            const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
            return [...prev, { name, url }];
        });
    };

    return (
        <PokemonContext.Provider value={{
            pokemonList,
            currentPokemon,
            capturedPokemon,
            searchInPokemonList,
            setCurrentPokemonID,
            onCaptureCurrentPokemon,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

PokemonProvider.propTypes = {
    children: PropTypes.node,
}

const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (context === undefined) {
        throw new Error('usePokemonContext must be used within a PokemonProvider');
    }

    return context;
}

export {PokemonProvider, usePokemonContext};
