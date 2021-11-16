import {Route, Routes} from "react-router-dom";
import {PokemonProvider} from "./context/pokemonContext";
import {Home} from "./components/features";
import styles from './App.module.css'
import {Favorites} from "./components/features/Favorites";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className={styles.App}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <PokemonProvider>
                <Router/>
            </PokemonProvider>
        </div>
    );
};

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/captures" element={<Favorites/>}/>
        </Routes>
    );
};

export default App;
