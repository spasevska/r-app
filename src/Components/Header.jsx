import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    openMenu = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        });
    }

    render() {
        return (
            <div style={styleHeader}>
                <div style={styleApp}>
                    <div className='row'>
                        <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                            <div className='left'>
                                <Link to='/'>
                                    <i style={styleIcon} className="fab fa-facebook-square"></i>
                                </Link>
                                <div className={this.state.open ? "button_container active" : "button_container"} onClick={this.openMenu}>
                                    <span className="top"></span>
                                    <span className="middle"></span>
                                    <span className="bottom"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-7 col-sx-7 col-md-7 col-lg-7'>
                            <div className={this.state.open ? 'overlay open' : 'overlay'}>
                                <nav className='right overlay-menu'>
                                    <ul>
                                        <li>Home</li>
                                        <li>Gallery</li>
                                        <li>Find Friends</li>
                                        <li>Create</li>
                                        <li>Help</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styleApp = {
    width: '80vw',
    margin: '0 auto'
}

const styleHeader = {
    backgroundColor: '#3d5a99',
    padding: '10px'
}

const styleIcon = {
    color: 'white',
    fontSize: '40px'
}

export default Header;