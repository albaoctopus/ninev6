import React , { useState , useEffect } from 'react';

import { ConnectWallet } from "@thirdweb-dev/react";

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import { Dropdown } from 'react-bootstrap';

import './styles.scss';
import logo from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';

import DarkMode from './DarkMode';

// import Button from '../button';



const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (
        <header className={`header ${scroll ? 'is-fixed' : ''}`}>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">                              
                            <div id="site-header-inner">                                 
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <h2>9.News</h2> 
                                           
                                        </Link>
                                    </div>
                                </div>
                                
                               <div className="header-center">
                                
                               </div>

                                <div className="header-right">
                                <ConnectWallet />
                                    
                                    
                                    <DarkMode />
                                </div>  

                               
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
       
    );
}

export default Header;