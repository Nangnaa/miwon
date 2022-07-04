import React, { Component } from 'react';
import stl from './Header.module.css';
// import stl from "styled-components";

class header extends Component {
    render() {
        return (
            <div className='site'>
                <header id='masthead' className='site-header' >
                    <div className='header-container'>
                        <div className='headerinfo'>
                            {/* logo */}
                            <h1 className='logo'>
                                <a href='/' className='logo-link'><img className={stl.mainlogo} src='img/logo.svg' alt='mainlogo'></img></a>
                            </h1>

                            {/* MenuButton */}
                            <button type='button' className='MenuButton'>
                                <span className='MenuButton-menu::after'>
                                    <span className='ab-text'>메뉴열기</span>
                                    
                                </span>
                                <span className='MenuButton-close::after'>
                                    <span className='ab-text'>메뉴닫기</span>
                                </span>
                            </button>
                            

                        </div>
                    </div>
                    
                </header>

                {/* navigation */}
                <div className='siteheadermenu'>
                    <div className='siteheadermenu-scroll'>
                        <div className='header-container'>
                            <div className='siteheadermenu-title'>Menu</div>
                            <nav id='site-navigation' className='primary-navigation' aria-label='주 메뉴'>
                                <div></div>
                            </nav>
                        </div>
                    </div>
                </div>



                <div id='site-content' className='site-content'>
                    {/* 상단배너 */}
                <div className=''>

                </div>

                </div>
                <div></div>
            </div>
        );
    }
}

export default header;