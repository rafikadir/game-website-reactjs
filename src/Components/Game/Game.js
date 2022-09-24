import React from 'react';
import './Game.scss';
import { GoPlus } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";


const Game = ({games}) => {

    const {name,background_image, metacritic,added, rating, reviews_count, released, rating_top, genres} = games;

    return (
        <div className='col-lg-3'>
            <div className="game-card">
                <div className="game-media">
                    <div className="game-img" style={{ backgroundImage:`url('${background_image}')`}}></div>
                </div>

                <div className="game-text">
                    <div className='game-meta'>
                        <span className='metacritic' title='Metascore'>{metacritic}</span>
                    </div>
                    <div className="game-title">
                        <a className='title' href='/'>{name}</a>
                    </div>
                    <div className='game-bottom'>
                        <span><GoPlus/>{added}</span>
                        <span><AiOutlineStar/>{rating}</span>
                        <span><MdOutlineReviews/>{reviews_count}</span>
                    </div>
                    <div className="game-info">
                        <ul>
                            <li>Realease Date: <span>{released}</span></li>
                            <li>Genere: <span>
                                {
                                    genres.map(genre =><span className='genre'>{genre.name}</span>)
                                }
                                </span>
                            </li>
                            <li>Chart: <span>#{rating_top} top 2022</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;