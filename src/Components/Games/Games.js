import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import Game from '../Game/Game';

const Games = () => {

    const [games, setGames] = useState([]);
    const currentDate = Moment().format('YYYY-MM-DD');
    const previousDate = Moment(currentDate).subtract(1, 'months').format('YYYY-MM-DD')

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=2df49fa580cc4a1a97f0f77bbba928d6&dates${currentDate},${previousDate}`)
           .then((res) => res.json())
           .then((data) => setGames(data.results))
    },[currentDate,previousDate])

    return (
        <>
            <div className="row">
                {
                   games.map(game => <Game key={game.id} games={game} /> )
                }
            </div>
        </>
    );
};

export default Games;