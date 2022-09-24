import React from 'react';
import './Sidebar.scss';
import { BiHomeAlt, BiHeart, BiLayer, BiGroup, BiStar } from "react-icons/bi";
import { AiOutlineFire,AiFillAndroid} from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { BsWindows } from "react-icons/bs";
import { FaPlaystation, FaXbox, FaAppStoreIos } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <BiHomeAlt/>
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <BiHeart/>
                        Wishlist
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <BiLayer/>
                        Library
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <BiGroup />
                        People you Follow
                    </a>
                </li>

                <h4 className='sidebar-title'>
                    New Releases
                </h4>

                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <BiStar/>
                        Last 30 Days
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <AiOutlineFire/>
                        This Week
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <TbPlayerTrackNext/>
                        Next Week
                    </a>
                </li>

                <h4 className='sidebar-title'>
                    Platforms
                </h4>

                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <BsWindows/>
                        PC
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <FaXbox/>
                        Xbox One
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <FaAppStoreIos/>
                        iOS
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <AiFillAndroid/>
                        Android
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <FaPlaystation/>
                        PlayStation
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;