import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getStoredList } from '../../utils/fakedb';
import Game from '../Game/Game';

const Wishlist = () => {

    const [games, setGames] = useState([]);
    const [lists, setLists] = useState([]);
    
    useEffect(() => {
        const url = `https://api.rawg.io/api/games?key=2df49fa580cc4a1a97f0f77bbba928d6`;
        fetch(url)
           .then((res) => res.json())
           .then((data) => {
            setGames(data.results);
        })
    },[])

    
    useEffect(() => {
        const storedList = getStoredList();
        const savedList = [];
        for(const id in storedList) {
            const addedList = games.find(game => game.id === parseInt(id));
            savedList.push(addedList);
        }
        setLists(savedList);
    },[games])

    return (
        <div className='row'>
           {
            lists.map(list => <Game list={list} />)
           } 
        </div>
    );
};

export default Wishlist;