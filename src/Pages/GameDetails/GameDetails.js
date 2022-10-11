import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './../../Components/Sidebar/Sidebar';
import './GameDetails.scss';
import { FcPlus } from "react-icons/fc";



const GameDetails = () => {

    let {slug} = useParams();
    const isLoad = true;

    const [game, setGame] = useState({});
    useEffect(() => {
        const url = `https://api.rawg.io/api/games/${slug}?key=2df49fa580cc4a1a97f0f77bbba928d6&dates`;
        fetch(url)
            .then((res) => res.json())
            .then(data =>setGame(data))
    },[])

    const {updated, name, description_raw, background_image, parent_platforms
        , genres, publishers, tags, developers, 
            website} = isLoad ? game : null;


    return (
        <>
            <div className="game-details">
                <div className='game-details-banner' style={{backgroundImage:`url('${background_image}')`}}>
                </div>
                <div className='container-fluid px-4 mt-5'>
                    <div className='row'>
                        <div className="col-lg-2">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="game-details-content">
                                        <h6>{updated}</h6>
                                        <h2 className='game-details-title'>{name}</h2>
                                        <button className='add-to-wishlist'>
                                            Add to Wishlist
                                            <FcPlus/>
                                        </button>
                                        <p className='game-desc'>{description_raw}</p>

                                        <div className="game-details-meta">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="meta-details-box">
                                                        <p className="meta-details-box-title">Platform</p>
                                                        <ul>
                                                            {
                                                               parent_platforms?.map(platform => <li>{platform.platform.name}</li>) 
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="meta-details-box">
                                                        <p className="meta-details-box-title">Genre</p>
                                                        <ul>
                                                            {
                                                                genres?.map(genre => <li>{genre.name}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="meta-details-box">
                                                        <p className="meta-details-box-title">Publishers</p>
                                                        <ul>
                                                            {
                                                                publishers?.map(publisher => <li key={publisher.id}>{publisher.name}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="meta-details-box">
                                                        <p className="meta-details-box-title">Developers</p>
                                                        <ul>
                                                            {
                                                                developers?.map(developer => <li key={developer.name}>{developer.name}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="meta-details-box">
                                                        <p className="meta-details-box-title">Tags</p>
                                                        <ul>
                                                            {
                                                                tags?.map(tag => <li key={tag.name}>{tag.name}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="meta-details-box">
                                                        <p className="meta-details-box-title">Website</p>
                                                        <ul>
                                                            <li><a href="/">{website}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="game-details-img">
                                        <img src={background_image} alt="screenshot" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameDetails;