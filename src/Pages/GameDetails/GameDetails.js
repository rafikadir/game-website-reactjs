import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './../../Components/Sidebar/Sidebar';
import './GameDetails.scss';
import { FcPlus } from "react-icons/fc";



const GameDetails = () => {

    let {slug} = useParams();
    const [game, setGame] = useState({});
    useEffect(() => {
        const url = `https://api.rawg.io/api/games/${slug}?key=2df49fa580cc4a1a97f0f77bbba928d6&dates`;
        fetch(url)
            .then((res) => res.json())
            .then(data =>setGame(data))
    },[])

    console.log(game);


    return (
        <div className='container-fluid px-4 mt-5'>
            <div className='row'>
                <div className="col-lg-2">
                    <Sidebar/>
                </div>
                <div className="col-lg-10">
                   <div className="row">
                    <div className="col-lg-6">
                        <div className="game-details-content">
                            <h2 className='game-details-title'>{game?.name}</h2>
                            <button className='add-to-wishlist'>
                                Add to Wishlist
                                <FcPlus/>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">

                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;