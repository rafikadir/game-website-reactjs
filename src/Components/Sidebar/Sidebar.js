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
                    <Link className="nav-link" to="/wishlist">
                        <BiHeart/>
                        Wishlist
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favourite">
                        <BiLayer/>
                        Favourite
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <BiGroup />
                        People you Follow
                    </Link>
                </li>

                <h4 className='sidebar-title'>
                    New Releases
                </h4>

                <li className="nav-item">
                    <Link className="nav-link active" to="/">
                        <BiStar/>
                        Last 30 Days
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">
                        <AiOutlineFire/>
                        This Week
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">
                        <TbPlayerTrackNext/>
                        Next Week
                    </Link>
                </li>

                <h4 className='sidebar-title'>
                    Platforms
                </h4>

                <li className="nav-item">
                    <Link className="nav-link active" href="#">
                        <BsWindows/>
                        PC
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">
                        <FaXbox/>
                        Xbox One
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">
                        <FaAppStoreIos/>
                        iOS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">
                        <AiFillAndroid/>
                        Android
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">
                        <FaPlaystation/>
                        PlayStation
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;