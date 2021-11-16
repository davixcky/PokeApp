import { Route, Routes} from "react-router-dom";
import {PokemonProvider} from "./context/pokemonContext";
import {Home} from "./components/features";
import styles from './App.module.css'
import {Favorites} from "./components/features/Favorites";

const App = () => {
    return (
        <div className={styles.App}>
            <PokemonProvider>
                <Router />
            </PokemonProvider>
        </div>
    );
};

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/captures" element={<Favorites/>} />
        </Routes>
    );
};

export default App;
