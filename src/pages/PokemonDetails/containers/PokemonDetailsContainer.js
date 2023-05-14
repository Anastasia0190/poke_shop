import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPokemonDetailsThunk } from "../api";
import { pokemonNameSelector, pokemonStatsSelector, pokemonSpritesSelector, isPokemonDetailsLoadingSelector } from "../selectors";
import Spinner from "commonComponents/Spinner";
import StatItem from "../components/StatItem";
import {STAT_ICON_MAP} from "../config/statsConfig";


const PokemonDetailsContainer = () => {
    const dispatch = useDispatch();
    const { pokemonName } = useParams();
    
    const name = useSelector(pokemonNameSelector);
    const stats = useSelector(pokemonStatsSelector);
    const sprites = useSelector(pokemonSpritesSelector);
    const isLoading = useSelector(isPokemonDetailsLoadingSelector);

    useEffect(() => {
        dispatch(getPokemonDetailsThunk(pokemonName))
    }, [dispatch, pokemonName]);

    return (
        <div>
            <h1>Details</h1>
            {isLoading ? ( 
                <Spinner /> 
            ) : ( 
                <>
                <h2>Pokemon: {name}</h2>
            <img src={sprites?.front_default} alt="" width={250} height={250} />
                <div>
                    {Object.entries(stats).map(([statNane, statValue]) => (
                        <StatItem 
                        key={statNane}
                        statValue={statValue} 
                        picture={STAT_ICON_MAP[statNane]} />
                    ))}
                </div>
                
                </>
            )}
            
        </div>
    );
};

export default PokemonDetailsContainer;