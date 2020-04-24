import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';
import { NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
const Header = (props) => {
    const history = createBrowserHistory();
    var cur_loc=history.location.pathname;
    var active=''
    if(cur_loc=='/'){
        active='active';
    }else if(cur_loc=='/about'){
        active='active';
    }else if(cur_loc=='/services'){
        active='active';
    }else if(cur_loc=='/education'){
        active='active';
    }else if(cur_loc=='/work'){
        active='active';
    }else if(cur_loc=='/client'){
        active='active';
    }else if(cur_loc=='/blog'){
        active='active';
    }else if(cur_loc=='/contact'){
        active='active';
    }
    return(
        <React.Fragment>

        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
            <div className="container">

                <NavLink className="navbar-brand logo" to='/'>
                <img src={props.data} alt="" className="img-fluid logo-light"/>

                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item " >
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/services' className="nav-link">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/education' className="nav-link">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/work' className="nav-link">Work</NavLink>
                        </li>
                        {/*<li className="nav-item">
                            <NavLink to='/client' className="nav-link">Client</NavLink>
                        </li>*/}
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </React.Fragment>
    )
};

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
