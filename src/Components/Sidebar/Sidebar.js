import React from 'react';
import './Sidebar.scss';
import { BiHomeAlt, BiHeart, BiLayer, BiGroup, BiStar } from "react-icons/bi";
import { AiOutlineFire,AiFillAndroid} from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { BsWindows } from "react-icons/bs";
import { FaPlaystation, FaXbox, FaAppStoreIos } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">
                        <BiHomeAlt/>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <BiHeart/>
                        Wishlist
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <BiLayer/>
                        Library
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <BiGroup />
                        People you Follow
                    </a>
                </li>

                <h4 className='sidebar-title'>
                    New Releases
                </h4>

                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <BiStar/>
                        Last 30 Days
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <AiOutlineFire/>
                        This Week
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <TbPlayerTrackNext/>
                        Next Week
                    </a>
                </li>

                <h4 className='sidebar-title'>
                    Platforms
                </h4>

                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <BsWindows/>
                        PC
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaXbox/>
                        Xbox One
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaAppStoreIos/>
                        iOS
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <AiFillAndroid/>
                        Android
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaPlaystation/>
                        PlayStation
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;